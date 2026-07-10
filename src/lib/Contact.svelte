<script>
  import { onMount } from 'svelte';
  import SectionHead from './SectionHead.svelte';
  import { contact, courses } from './data.js';

  const TURNSTILE_SITE_KEY = '0x4AAAAAADzbunucCV7IFLYR';
  let turnstileScriptPromise;

  function loadTurnstile() {
    if (typeof window === 'undefined') return Promise.resolve();
    if (window.turnstile) return Promise.resolve(window.turnstile);

    if (!turnstileScriptPromise) {
      turnstileScriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-turnstile-script]');

        if (existing) {
          existing.addEventListener('load', () => resolve(window.turnstile), { once: true });
          existing.addEventListener('error', reject, { once: true });
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.dataset.turnstileScript = 'true';
        script.onload = () => resolve(window.turnstile);
        script.onerror = () => reject(new Error('Turnstile could not be loaded.'));
        document.head.appendChild(script);
      });
    }

    return turnstileScriptPromise;
  }

  let sent = $state(false);
  let submitting = $state(false);
  let statusMessage = $state('');
  let turnstileToken = $state('');
  let turnstileEl = $state();
  let turnstileWidgetId;

  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let interest = $state('Discovery flight');
  let date = $state('');
  let time = $state('');
  let message = $state('');

  onMount(() => {
    let cancelled = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !turnstileEl || !turnstile) return;

        turnstileWidgetId = turnstile.render(turnstileEl, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => {
            turnstileToken = token;
            statusMessage = '';
          },
          'expired-callback': () => {
            turnstileToken = '';
          },
          'error-callback': () => {
            turnstileToken = '';
            statusMessage = 'Security check could not be completed. Please refresh and try again.';
          },
        });
      })
      .catch(() => {
        statusMessage = 'Security check could not be loaded. Please refresh and try again.';
      });

    return () => {
      cancelled = true;
      if (window.turnstile && turnstileWidgetId != null) {
        window.turnstile.remove(turnstileWidgetId);
      }
    };
  });

  async function submit(e) {
    e.preventDefault();
    statusMessage = '';

    if (!turnstileToken) {
      statusMessage = 'Please complete the security check before sending.';
      return;
    }

    submitting = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          interest,
          date,
          time,
          message,
          turnstileToken,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.');
      }

      sent = true;
    } catch (error) {
      statusMessage = error.message || 'Your message could not be sent. Please try again.';
      turnstileToken = '';
      if (turnstileWidgetId != null) {
        window.turnstile?.reset(turnstileWidgetId);
      }
    } finally {
      submitting = false;
    }
  }

  const field =
    'mt-2 w-full radius-ui border border-line-dark/55 bg-paper-2/45 px-3.5 py-2.5 text-base text-ink outline-none transition-colors placeholder:text-soft/70 focus:border-accent focus:bg-paper';

  // darker labels - the form is the one place that needs clear, legible outlines/text
  const labelCls = 'label text-ink/80';
</script>

<section id="contact" class="border-t border-line">
  <div class="site-shell section-space">
    <SectionHead kicker="Contact" title="Build your training plan directly with your instructor." />

    <div class="section-flow card-elevated p-8 sm:p-10">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <!-- form -->
        <div class="lg:col-span-7">
          {#if sent}
            <div class="flex min-h-[24rem] flex-col items-start justify-center">
              <span class="h-3 w-3 bg-signal"></span>
              <h3 class="display mt-5 text-3xl text-ink">Thanks, talk soon.</h3>
              <p class="mt-3 max-w-sm text-soft">
                Your message has been sent. You will also receive a confirmation email at the address you entered.
              </p>
            </div>
          {:else}
            <form onsubmit={submit} class="space-y-7">
              <div class="grid gap-7 sm:grid-cols-2">
                <label class="block">
                  <span class={labelCls}>Full name</span>
                  <input required type="text" bind:value={name} placeholder="Your name" class={field} />
                </label>
                <label class="block">
                  <span class={labelCls}>Email</span>
                  <input required type="email" bind:value={email} placeholder="you@email.com" class={field} />
                </label>
                <label class="block">
                  <span class={labelCls}>Phone</span>
                  <input type="tel" bind:value={phone} placeholder="(000) 000-0000" class={field} />
                </label>
                <label class="block">
                  <span class={labelCls}>Interested in</span>
                  <select bind:value={interest} class={field}>
                    <option>Discovery flight</option>
                    {#each courses as c}
                      <option>{c.name}</option>
                    {/each}
                    <option>Aircraft rental</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label class="block">
                  <span class={labelCls}>Preferred date</span>
                  <input type="date" bind:value={date} class={field} />
                </label>
                <label class="block">
                  <span class={labelCls}>Preferred time</span>
                  <input type="time" bind:value={time} class={field} />
                </label>
              </div>

              <label class="block">
                <span class={labelCls}>Message</span>
                <textarea
                  required
                  rows="3"
                  bind:value={message}
                  placeholder="Tell me a little about your goals"
                  class={field}
                ></textarea>
              </label>

              <div bind:this={turnstileEl}></div>

              {#if statusMessage}
                <p class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {statusMessage}
                </p>
              {/if}

              <button
                type="submit"
                disabled={submitting}
                class="btn-gradient-accent w-full transition-all duration-300 hover:-translate-y-0.5"
              >
                {submitting ? 'Sending...' : 'Send request \u2192'}
              </button>
            </form>
          {/if}
        </div>

        <!-- contact details -->
        <div class="lg:col-span-5 lg:border-l lg:border-line lg:pl-14">
          <p class="max-w-md text-base leading-relaxed text-soft sm:text-lg">
            Reserve a slot, schedule a discovery lesson, or ask where to start. You will speak directly with the
            person who will train you, not a front desk or call center.
          </p>

          <dl class="section-flow-tight">
            <a href={contact.phoneHref} class="contact-row">
              <span class="label text-soft">Phone</span>
              <span class="contact-row__value">{contact.phone}</span>
            </a>
            <a href={contact.emailHref} class="contact-row">
              <span class="label text-soft">Email</span>
              <span class="contact-row__value">{contact.email}</span>
            </a>
            <div class="contact-row contact-row--static">
              <span class="label text-soft">Based at</span>
              <span class="contact-row__value">{contact.airport}</span>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Contact details rows - uniform */
  .contact-row {
    display: block;
    padding: 1.25rem 0.15rem;
    border-bottom: 1px solid var(--color-line);
    transition:
      transform 0.2s ease,
      border-color 0.2s ease;
  }

  .contact-row:last-child {
    border-bottom: 0;
  }

  a.contact-row:hover {
    transform: translateX(4px);
  }

  .contact-row__value {
    display: block;
    margin-top: 0.45rem;
    font-family: var(--font-display);
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.15;
    font-size: 1.35rem;
    color: var(--color-ink);
    transition: color 0.2s ease;
    word-break: break-word;
  }

  a.contact-row:hover .contact-row__value {
    color: var(--color-accent-2);
  }
</style>
