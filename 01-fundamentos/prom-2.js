function sumarUno(numero) {
    var promesa = new Promise(function(resolve, reject){

        console.log(numero);

        if (numero>=7){
            reject('el numero es muy alto')
        }

        setTimeout(function () {
            //return numero+1;
            resolve(numero + 1)
        }, 800);
    });
    return promesa;
}
sumarUno(5)
.then(sumarUno)
.then(sumarUno)
.then(nuevonumero=>{
    console.log(nuevonumero);
    return sumarUno( nuevonumero );
}).catch(error =>{
    console.log('ERROR EN LA PROMESA');
    console.log(error);
});
//console.log(sumarUno(5));