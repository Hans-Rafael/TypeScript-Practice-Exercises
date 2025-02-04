"use strict";
function registerUser(user) {
    return `Name: ${user.name}, \n Age: ${user.age}, \n Email: ${user.email}`;
}
let usuario = {
    name: "Eva",
    age: 41,
    email: "XXXXXXXXXXXXX"
};
console.log(registerUser(usuario));
let variable = "Hola";
variable = 42;
console.log('variable:', variable);
