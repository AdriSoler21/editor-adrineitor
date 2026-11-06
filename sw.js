// Permite instalar el editor como aplicación. No guarda nada en caché: siempre se usa la última versión.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
