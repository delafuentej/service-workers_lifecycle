
// Service Workers Lifecycle

self.addEventListener('install', event => {

    // assest downloads

    //create a cache
    console.log('SW: Installing SW...');

    const installation = new Promise((resolve, reject)=> {

        setTimeout(()=>{
            console.log('SW: Installations finished!!!');
             //sw:to take control immediately after installations
             self.skipWaiting();
            resolve();
            
        },1);
    
        
    });


    event.waitUntil(installation);



});

// sw activation: when it takes control of the application

self.addEventListener('activate', event => {
    // delete old cache

    console.log('_SW: Active & Ready!!!')
});


// FETCH: HANDLING HTTP REQUEST
self.addEventListener('fetch', event => {
    // implementing caching strategies
    // console.log('SW:', event.request.url);

    // if(event.request.url.includes('https://reqres.in/')){

    //     const res = new Response(`{ok: false, message: 'If error = dead()}`);

    //     event.respondWith(res);
    // }
})

//SYNC: INTERNET CONNECTION RECOVERY
self.addEventListener('sync', event => {
    console.log('WS_Sync: Connected!');
    console.log(event.tag);
});

//PUSH: HANDLING PUSH NOTIFICATIONS

self.addEventListener('push', event => {
    console.log('Notification received');
    //console.log(event);
});