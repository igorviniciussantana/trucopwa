let cacheName = "contador_truco_v1.2";
let filesToCache = ["/", "/index.html", 
                "/css/style.css", "/js/main.js", "/images/pencil.svg", "/images/trophy.svg", "/images/champion.svg", ];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
