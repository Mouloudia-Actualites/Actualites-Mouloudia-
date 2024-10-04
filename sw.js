const cacheName = 'site-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/icon-192x192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
