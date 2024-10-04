const cacheName = 'mouloudia-cache-v2'; // يمكنك تغيير الإصدار عند تحديث الملفات
const assets = [
  '/inde.html',  // الصفحة الرئيسية
  '/index.html',
  // أضف جميع الملفات الأخرى التي تستخدمها في الموقع
  '/images/header.jpg',
 
  '/news1.html',  // مثال لصفحة مقالات أو صفحات أخرى
  '/first1.html'    // أي صفحة أخرى
   '/contact1.html'
 '/contac1.html'
 '/reserve1.html'
];

// تخزين الملفات في cache عند التثبيت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// استرجاع الملفات من cache في حالة عدم الاتصال بالإنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
