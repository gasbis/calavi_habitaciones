// Registra el service worker que permite instalar Calavi como aplicación (PWA).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(function (err) {
      console.warn("No se pudo registrar el service worker:", err);
    });
  });
}
