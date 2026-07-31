const CACHE='apprentice-plus-v1.5.2-bell-notifications';
const UPDATE_INFO={
 version:'V1.5.2',
 features:[
  'Makes the white bell silhouette 50% smaller to match the reduced button.',
  'Allows notifications to be swiped either left or right to delete.',
  'Shows app updates inside the bell with a What’s new list and a View update button.',
  'Keeps update installation behind the existing Let’s go confirmation.'
 ]
};
const APP_SHELL=['./','./index.html','./styles.css?v=1.5.2','./functional-skills-bank.js?v=1.5.2','./trade-courses-bank.js?v=1.5.2','./app.js?v=1.5.2','./manifest.json','./pdf-generator.js?v=1.5.2','./logo-apprentice-plus.png','./icon-192.png','./icon-512.png','./icon-1024.png','./apple-touch-icon.png','./favicon-32.png','./favicon-64.png'];

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)));
});

self.addEventListener('message',event=>{
 if(event.data?.type==='GET_UPDATE_INFO'){
  event.source?.postMessage({type:'UPDATE_INFO',info:UPDATE_INFO});
 }
 if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('activate',event=>{
 event.waitUntil(
  caches.keys()
   .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
   .then(()=>self.clients.claim())
 );
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 const isCoreFile=url.pathname.endsWith('/')||['index.html','app.js','functional-skills-bank.js',
  'trade-courses-bank.js','qrcode-browser.js','pdf-generator.js','specification-sheet.js','styles.css','manifest.json','service-worker.js'].some(name=>url.pathname.endsWith('/'+name));
 if(isCoreFile){
  event.respondWith(
   fetch(event.request,{cache:'no-store'})
    .then(response=>{
     if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
     return response;
    })
    .catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html')))
  );
  return;
 }
 event.respondWith(
  caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
   if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
   return response;
  }))
 );
});
