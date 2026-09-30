const STORAGE_KEY = 'l2f-cookie-consent';
const MATOMO_URL = 'https://raven-10.hostverna.com/';

export function getConsent() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'accepted' || value === 'declined') return value;
  } catch {
    /* private mode or blocked storage */
  }
  return null;
}

function remember(value) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent('l2f-consent', { detail: value }));
}

function paq() {
  window._paq = window._paq || [];
  return window._paq;
}

export function enableAnalytics() {
  if (typeof window === 'undefined') return;
  const queue = paq();
  if (window.__l2fMatomo) return;
  window.__l2fMatomo = true;
  queue.push(['setTrackerUrl', `${MATOMO_URL}matomo.php`]);
  queue.push(['setSiteId', '1']);
  queue.push(['enableLinkTracking']);
  const script = document.createElement('script');
  script.async = true;
  script.src = `${MATOMO_URL}matomo.js`;
  document.head.appendChild(script);
}

export function trackPage(path = window.location.pathname) {
  if (typeof window === 'undefined' || getConsent() !== 'accepted') return;
  enableAnalytics();
  const queue = paq();
  queue.push(['setCustomUrl', path]);
  queue.push(['setDocumentTitle', document.title]);
  queue.push(['trackPageView']);
}

function clearMatomoCookies() {
  const cookies = document.cookie ? document.cookie.split(';') : [];
  for (const cookie of cookies) {
    const name = cookie.split('=')[0]?.trim();
    if (!name?.startsWith('_pk_')) continue;
    document.cookie = `${name}=; Max-Age=0; path=/`;
  }
}

export function acceptAnalytics() {
  remember('accepted');
  enableAnalytics();
  paq().push(['forgetUserOptOut']);
  trackPage(`${window.location.pathname}${window.location.hash}`);
}

export function declineAnalytics() {
  if (window.__l2fMatomo) {
    paq().push(['optUserOut']);
  }
  clearMatomoCookies();
  remember('declined');
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent('l2f-cookie-settings'));
}
