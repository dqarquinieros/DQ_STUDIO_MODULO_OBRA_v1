const CACHE='dq-obras-v3';
const ASSETS=['./','./index.html','./manifest.json','./assets/styles.css','./assets/app.js','./assets/icon-192.svg','./assets/icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.waitUntil?null:e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
