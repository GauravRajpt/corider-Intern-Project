const CACHE_NAME = "version 1";
const urlstocache = ["index.html", "offline.html"];

const self = this;

//install SW
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log('opened cache');

        return cache.addAll(urlstocache);
    }));
});

//listen of request

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
                .catch(()=>{
                    caches.match("offline.html")
                })
        })
    )
});

//Activate the SW

self.addEventListener("activate", (event) => {});
