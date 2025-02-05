"use strict";
//Crea una función que reciba un User y devuelva un string con sus datos formateados.
function registerUser(user) {
    return `Name: ${user.name}, \n Age: ${user.age}, \n Email: ${user.email}`;
}
// Instanciando la clase
let usuario = {
    name: "Eva",
    age: 41,
    email: "XXXXXXXXXXXXX"
};
//Usando la función
console.log(registerUser(usuario));
//Union types:
let variable = "Hola"; // por defecto es hola
variable = 42;
console.log('variable:', variable);
