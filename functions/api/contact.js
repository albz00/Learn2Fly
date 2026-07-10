const OWNER_EMAIL = 'alzimmr1@gmail.com';
const FROM_EMAIL = 'Learn2FlyFlorida <info@hostverna.co>';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

const clean = (value, maxLength = 1000) =>
  String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);

const cleanMessage = (value) =>
  String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, 5000);

const escapeHtml = (value) =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

async function verifyTurnstile({ token, request, env }) {
  const secret = env.turnstile_secret_key ?? env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { success: false, error: 'Turnstile secret key is not configured.' };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const remoteIp = request.headers.get('CF-Connecting-IP');
  if (remoteIp) {
    body.set('remoteip', remoteIp);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  if (!response.ok) {
    return { success: false, error: 'Turnstile verification request failed.' };
  }

  const result = await response.json();
  return {
    success: Boolean(result.success),
    error: result['error-codes']?.join(', ') || 'Turnstile verification failed.',
  };
}

async function sendEmail({ env, to, subject, text, html, replyTo }) {
  const apiKey = env.resend_api_key ?? env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Resend API key is not configured.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend request failed: ${details}`);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}

export async function onRequestPost({ request, env }) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ message: 'Invalid request body.' }, 400);
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180).toLowerCase();
  const phone = clean(payload.phone, 60);
  const interest = clean(payload.interest, 160);
  const date = clean(payload.date, 40);
  const time = clean(payload.time, 40);
  const message = cleanMessage(payload.message);
  const turnstileToken = String(payload.turnstileToken ?? '').trim();

  if (!name || !email || !interest || !message) {
    return json({ message: 'Please complete the required fields.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ message: 'Please enter a valid email address.' }, 400);
  }

  if (!turnstileToken) {
    return json({ message: 'Please complete the security check.' }, 400);
  }

  let turnstile;

  try {
    turnstile = await verifyTurnstile({ token: turnstileToken, request, env });
  } catch (error) {
    console.error(error);
    return json({ message: 'Security check could not be verified. Please try again.' }, 502);
  }

  if (!turnstile.success) {
    return json({ message: 'Security check failed. Please try again.' }, 400);
  }

  const submitted = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    `Interested in: ${interest}`,
    date && `Preferred date: ${date}`,
    time && `Preferred time: ${time}`,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const ownerSubject = `Training request from ${name} - ${interest}`;
  const confirmationSubject = 'We received your Learn2FlyFlorida request';

  try {
    await Promise.all([
      sendEmail({
        env,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: ownerSubject,
        text: submitted,
        html: `
          <h2>New Learn2FlyFlorida contact request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          <p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>
          ${date ? `<p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>` : ''}
          ${time ? `<p><strong>Preferred time:</strong> ${escapeHtml(time)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
        `,
      }),
      sendEmail({
        env,
        to: email,
        subject: confirmationSubject,
        text: `Hi ${name},\n\nThanks for contacting Learn2FlyFlorida. We received your message and will get back to you soon.\n\nYour message:\n${submitted}\n\nLearn2FlyFlorida`,
        html: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for contacting Learn2FlyFlorida. We received your message and will get back to you soon.</p>
          <p><strong>Your message:</strong></p>
          <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
          <p>Learn2FlyFlorida</p>
        `,
      }),
    ]);
  } catch (error) {
    console.error(error);
    return json({ message: 'We could not send your message right now. Please try again or call directly.' }, 502);
  }

  return json({ message: 'Message sent.' });
}
