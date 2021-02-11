self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open("notes-store").then(function (cache) {
            return cache.addAll(["/Notes/", "/Notes/index.html", "/Notes/index.js", "/Notes/style.css"]);
        })
    );
});

self.addEventListener("fetch", function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
