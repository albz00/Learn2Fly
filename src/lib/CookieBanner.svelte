<script>
  import { onMount } from 'svelte';
  import { acceptAnalytics, declineAnalytics, getConsent } from './consent.js';

  let open = $state(getConsent() == null);

  onMount(() => {
    open = getConsent() == null;
    const show = () => {
      open = true;
    };
    window.addEventListener('l2f-cookie-settings', show);
    return () => window.removeEventListener('l2f-cookie-settings', show);
  });

  function accept() {
    acceptAnalytics();
    open = false;
  }

  function decline() {
    declineAnalytics();
    open = false;
  }
</script>

{#if open}
  <div class="cookie-banner">
    <div
      class="cookie-banner__card"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
    >
      <div class="min-w-0 flex-1">
        <p id="cookie-banner-title" class="label text-accent">Cookies</p>
        <p class="mt-2 text-sm leading-relaxed text-ink/85">
          This site remembers your choice on this device. Analytics cookies run only if you allow them.
          They count visits. They are not used for advertising.
          <a href="/legal#cookie-notice" class="ulink font-semibold text-accent">Read the cookie notice</a>
        </p>
      </div>
      <div class="flex shrink-0 flex-wrap gap-2.5">
        <button type="button" class="btn-gradient-accent" onclick={accept}>Allow analytics</button>
        <button type="button" class="cookie-banner__quiet" onclick={decline}>Essential only</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 70;
    padding: 0.85rem clamp(1rem, 3.5vw, 2.1rem) calc(0.85rem + env(safe-area-inset-bottom));
    pointer-events: none;
  }

  .cookie-banner__card {
    pointer-events: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.25rem;
    max-width: 1240px;
    margin-inline: auto;
    border: 1px solid rgba(215, 227, 240, 0.95);
    border-radius: 1.1rem;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 18px 40px -24px rgba(11, 34, 61, 0.55);
    padding: 1rem 1.1rem;
  }

  .cookie-banner__quiet {
    border-radius: 999px;
    background: #eef3fb;
    color: #122941;
    padding: 0.78rem 1.25rem;
    font-size: 0.9375rem;
  }

  .cookie-banner__quiet:hover {
    background: #e4eef8;
  }
</style>
