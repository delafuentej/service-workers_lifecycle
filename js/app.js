

// check if we can use service worker
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => {
        //perform asynchronous task logging when there is no internet connection
        // setTimeout(()=>{
        //     reg.sync.register('posting-cats');
        //     console.log('Cat pictures were sent to the server');
        // },3000)

        //PUSH
        Notification.requestPermission().then( result =>{
            console.log(result);

            reg.showNotification('Hi! Nice to meet you!!!');
        })

    })
}



// SYNC
// if(window.SyncManager){

// }

// FETCH
// fetch('https://reqres.in/api/users')
// .then( res => res.text())
// .then( data => console.log(data))
