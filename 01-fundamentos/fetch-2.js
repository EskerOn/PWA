//PETICIÓN GET
//https://reqres.in/api/users

/*

fetch('https://reqres.in/api/users')
.then(resp =>{
    resp.json().then(console.log);
    //console.log(resp);
}

);
*/

fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj =>{
    console.log(respObj);
    console.log(respObj.page);
});