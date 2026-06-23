<script>
  import { onMount } from 'svelte';
  import { brand } from './data.js';

  const MIN_MS = 900;
  const FADE_MS = 550;

  let visible = $state(true);
  let fading = $state(false);

  onMount(() => {
    document.body.classList.add('is-loading');

    const preloadLogo = new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = resolve;
      img.src = brand.logo;
    });

    const pageReady = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_MS));

    Promise.all([preloadLogo, pageReady, fontsReady, minDelay]).then(() => {
      fading = true;
      setTimeout(() => {
        visible = false;
        document.body.classList.remove('is-loading');
      }, FADE_MS);
    });
  });
</script>

{#if visible}
  <div
    class="loading-screen"
    class:loading-screen--fade={fading}
    role="status"
    aria-live="polite"
    aria-label="Loading {brand.name}"
  >
    <div class="loading-screen__inner">
      <img
        src={brand.logo}
        alt=""
        class="loading-screen__logo"
        width="280"
        height="80"
        fetchpriority="high"
      />
      <div class="loading-screen__bar" aria-hidden="true">
        <span class="loading-screen__bar-fill"></span>
      </div>
    </div>
  </div>
{/if}
