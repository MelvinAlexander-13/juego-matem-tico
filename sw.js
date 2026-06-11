
// NOMBRE DEL CACHE
// =====================================

const CACHE_NAME =
    "tres-en-raya-v2";

// =====================================
// ARCHIVOS A GUARDAR
// =====================================

const FILES_TO_CACHE = [

    "/",
    "/index.html",

    "/css/variables.css",
    "/css/layout.css",
    "/css/game.css",
    "/css/responsive.css",

    "/board.js",
    "/game.js",
    "/guardar.js",
    "/ia.js",
    "/storage.js",
    "/ui.js",

    "/manifest.json",

    "/img/logo.png",
    "/img/icon-192.png",
    "/img/icon-512.png"

];

// =====================================
// INSTALACIÓN
// =====================================

self.addEventListener(
    "install",
    event => {

        self.skipWaiting();

        event.waitUntil(

            caches.open(
                CACHE_NAME
            )

            .then(cache => {

                return cache.addAll(
                    FILES_TO_CACHE
                );

            })

        );

    }
);

// =====================================
// ACTIVACIÓN
// =====================================

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches.keys()

            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if(

                            key !== CACHE_NAME

                        ){

                            return caches.delete(
                                key
                            );

                        }

                    })

                );

            })

            .then(() => {

                return self.clients.claim();

            })

        );

    }
);

// =====================================
// FETCH
// =====================================

self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches.match(
                event.request
            )

            .then(response => {

                if(response){

                    return response;
                }

                return fetch(
                    event.request
                )

                .then(networkResponse => {

                    return caches
                        .open(
                            CACHE_NAME
                        )

                        .then(cache => {

                            cache.put(
                                event.request,
                                networkResponse.clone()
                            );

                            return networkResponse;
                        });

                });

            })

            .catch(() => {

                return caches.match(
                    "/index.html"
                );

            })

        );

    }
);