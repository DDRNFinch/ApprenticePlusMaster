const CACHE='apprentice-plus-v1.5.1-emergency-recovery';
const UPDATE_INFO={
 version:'V1.5.1',
 features:[
  'Restores the stable V1.4 application after the V1.5 notification-centre crash.',
  'Preserves learner evidence and saved local data.',
  'Resets the app shell and service-worker cache to a verified stable build.'
 ]
};
const APP_SHELL=['./','./index.html','./styles.css?v=1.5.1','./functional-skills-bank.js?v=1.4.0','./trade-courses-bank.js?v=1.4.0','./app.js?v=1.5.1','./manifest.json','./pdf-generator.js?v=1.4.0','./logo-apprentice-plus.png','./icon-192.png','./icon-512.png','./icon-1024.png','./apple-touch-icon.png','./favicon-32.png','./favicon-64.png'];

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
