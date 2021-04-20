
function sumaLenta(numero){
    return new Promise( function(resolve, reject){
        setTimeout( function(){
            resolve(numero+1);
            //reject("error");
        }, 800);
    });
}

let sumaRapida = (numero) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(()=>resolve(numero + 1), 300);
    } );
}


Promise.race([sumaLenta(5), sumaRapida(10)])
    .then(respuestas => {
        console.log(respuestas);
    })
//sumaLenta(5).then(console.log);
//sumaRapida(10).then(console.log);