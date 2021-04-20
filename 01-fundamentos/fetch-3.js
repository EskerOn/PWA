//PETICIÓN POST
//https://reqres.in/api/users
let usuario ={
    nombre: 'Alejandro',
    edad: 21
};

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch( error => {
    console.log('Error en la aplicación');
    console.log(error);
});