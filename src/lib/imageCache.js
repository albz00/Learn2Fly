import { brand, cachedImageUrls, images } from './data.js';

const criticalImages = new Set([brand.logo, images.aircraftExterior, images.floridaMark]);

function preload(src) {
  const image = new Image();
  image.decoding = 'async';
  image.src = src;
}

export function warmImageCache() {
  const urls = [...new Set(cachedImageUrls)];
  for (const src of urls) {
    if (criticalImages.has(src)) preload(src);
  }

  const warmRest = () => {
    for (const src of urls) {
      if (!criticalImages.has(src)) preload(src);
    }
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(warmRest, { timeout: 1500 });
  } else {
    setTimeout(warmRest, 400);
  }

  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker
    .register('/sw.js')
    .then(() => navigator.serviceWorker.ready)
    .then((registration) => {
      registration.active?.postMessage({ type: 'CACHE_IMAGES', urls });
    })
    .catch(() => {
      /* caching is an enhancement */
    });
}
