self.addEventListener("install", (event) => {
  console.log("Service worker installato");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker attivo");
});

self.addEventListener("fetch", (event) => {
  // Lasciamo passare tutte le richieste senza cache speciale
});
