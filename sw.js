const nombreCache = 'apv-v1';

const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];


//Cuando se instala el Service Worker
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

  e.waitUntil(
    caches.open(nombreCache)
        .then( cache => {
            console.log('Cacheando');
            cache.addAll(archivos);
        })
  )  


})

//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e)
})

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache
            })
    )
})