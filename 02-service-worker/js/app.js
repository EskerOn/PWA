//if('serviceWorker' in navigator){
//    console.log('si se puede')
//}

//confirmar utilización
if (navigator.serviceWorker){
    //console.log('si se puede usar');
    navigator.serviceWorker.register('/sw.js');
}
