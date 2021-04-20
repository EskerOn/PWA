function retornaTrue(){
    return true;
}

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

let cosas = [sumaLenta(5),sumaRapida(10), false, 'hola mundo', retornaTrue()];

Promise.all(cosas)
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);
//sumaLenta(5).then(console.log);
//sumaRapida(10).then(console.log);