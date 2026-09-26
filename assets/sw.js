/* Service worker de Calavi.
 * - Los recursos estáticos (JS, CSS, fuentes, iconos) se sirven desde caché y se
 *   actualizan en segundo plano, para que la app arranque rápido.
 * - Las páginas se piden siempre a la red (los datos son en vivo); si no hay
 *   conexión se muestra /offline.html.
 * - Las llamadas al backend de Reflex (/_event, /_upload, /ping) nunca se cachean.
 * Sube CACHE_VERSION si cambias este archivo o offline.html.
 */
const CACHE_VERSION = "calavi-v1";
const PRECACHE = [
  "/offline.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.ico",
];
const BACKEND_PREFIXES = ["/_event", "/_upload", "/ping"];
const STATIC_RE = /\.(?:js|mjs|css|woff2?|ttf|png|jpg|jpeg|svg|ico|webp)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;
  if (sameOrigin && BACKEND_PREFIXES.some((p) => url.pathname.startsWith(p))) return;

  // Navegación: siempre red; sin conexión, página offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  // Recursos estáticos (propios y Google Fonts): caché + actualización en segundo plano.
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if ((sameOrigin && STATIC_RE.test(url.pathname)) || isFont) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async (cache) => {
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response && (response.ok || response.type === "opaque")) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
