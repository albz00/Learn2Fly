const CACHE = 'l2f-images-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

async function fromNetwork(request, cache) {
  const response = await fetch(request);
  if (response && (response.ok || response.type === 'opaque')) {
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isImage =
    event.request.destination === 'image' || url.hostname === 'imagedelivery.net';
  if (!isImage || event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(event.request);
      if (cached) {
        event.waitUntil(fromNetwork(event.request, cache).catch(() => cached));
        return cached;
      }
      try {
        return await fromNetwork(event.request, cache);
      } catch (error) {
        if (cached) return cached;
        throw error;
      }
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type !== 'CACHE_IMAGES') return;
  const urls = Array.isArray(event.data.urls) ? event.data.urls : [];
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        urls.map(async (url) => {
          if (await cache.match(url)) return;
          try {
            const response = await fetch(url, { mode: 'cors' });
            if (response.ok) await cache.put(url, response);
          } catch {
            /* a later page request can still fill the cache */
          }
        }),
      );
    })(),
  );
});
