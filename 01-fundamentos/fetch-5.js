fetch('https://reqres.in/api/users/10')
.then(resp => {
    console.log(resp);
    if (resp.ok){
        return resp.json()
    }
    else{
        //console.log('no hay no existe')
        throw new Error('No hay no existe')
    }
/*
    resp.clone().json()
    .then(usuario => {
        console.log(usuario.data)
    });

    resp.clone().json().then(usuario => {
        console.log(usuario.data)
    });
    
    resp.json().then(usuario => {
        console.log(usuario.data)
    });*/
})
.then(console.log)
.catch(error=>{
    console.log('error en la petición');
    console.log(error);
});