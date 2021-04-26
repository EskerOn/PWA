self.addEventListener('fetch', event => {

    //if(event.request.url.includes('.jpg')){
        //event.respondWith(fetch(null));
        //let fotoReq = fetch('img/main.jpg');
        //let fotoReq = fetch(event.request.url);
    //    let fotoReq = fetch(event.request.url);
    //    event.respondWith(fotoReq);
    //}
    //else{
    //    event.respondWith(fetch(event.request)); 
    //}
    //console.log(event)
    /* 
    if(event.request.url.includes('style.css')){
        let respon = new Response(`
        body {
            background-color: red !important;
            color: pink;
        }
        `, {
            headers:{
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(respon);
    }
    */
   //TAREA cambiar la imgen del main

   //if (event.request.url.includes('main.jpg')){
    //    let fotoReq = fetch('img/main-patas-arriba.jpg');
    //    event.respondWith(fotoReq);
   //}
    let respon = fetch(event.request)
    .then( resp => {
        /*
         if(resp.ok){
             return resp;
         }
         else{
             return fetch('img/main.jpg');
         }*/
         return resp.ok ? resp : fetch('img/main.jpg');
    }) 
    
   event.respondWith(respon);
});