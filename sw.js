/* Service worker — Be Healed - Tree of Life (PWA: instalacija + offline)
 *
 * Vlastite datoteke idu NETWORK-FIRST: molitve se često mijenjaju, a cache-first
 * bi korisnicima zauvijek servirao staru kopiju. Predmemorija služi samo offline.
 * Vanjske datoteke (unpkg, Google Fonts) su verzionirane, pa idu CACHE-FIRST.
 */
const CACHE = 'stablo-v1';
const CORE = [
  './',
  './manifest.webmanifest',
  './tree-bg.jpg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
const PRESKOCI = /googletagmanager|google-analytics|analytics\.google/;

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.allSettled(CORE.map((u) => c.add(u))))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Spremi odgovor; za tree-data.<jezik>.js?v=<sha> obriši stare verzije iste datoteke.
async function spremi(req, resp) {
  const c = await caches.open(CACHE);
  const url = new URL(req.url);
  if (url.origin === location.origin && url.search) {
    for (const k of await c.keys()) {
      const ku = new URL(k.url);
      if (ku.pathname === url.pathname && ku.search !== url.search) await c.delete(k);
    }
  }
  await c.put(req, resp);
}

// Stranica nakon učitavanja javi što je dohvatila (CDN skripte, fontovi, podaci),
// jer prvo učitavanje ide mimo service workera — bez ovoga ne bi radilo offline.
self.addEventListener('message', (e) => {
  const urls = (e.data && e.data.predmemoriraj) || [];
  e.waitUntil(Promise.allSettled(urls.filter((u) => !PRESKOCI.test(u)).map(async (u) => {
    if (await caches.match(u)) return;
    const resp = await fetch(u, { mode: 'cors', credentials: 'omit' });
    if (resp.ok) await spremi(new Request(u), resp);
  })));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || PRESKOCI.test(req.url)) return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    // Sve navigacije (i ?lang=xx) dijele jednu kopiju ljuske pod './'.
    const ljuska = new URL('./', self.registration.scope).href;
    e.respondWith(
      fetch(req)
        .then((resp) => { if (resp.ok) spremi(new Request(ljuska), resp.clone()); return resp; })
        .catch(() => caches.match(ljuska))
    );
    return;
  }

  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req)
        .then((resp) => { if (resp.ok) spremi(req, resp.clone()); return resp; })
        .catch(() => caches.match(req))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((resp) => {
      if (resp.ok && resp.type === 'cors') spremi(req, resp.clone());
      return resp;
    }))
  );
});
