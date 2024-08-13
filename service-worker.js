self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('mca-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/js/scripts.js',
                '/images/mca.png'
            ]);
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
