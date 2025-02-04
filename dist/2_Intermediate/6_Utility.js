"use strict";
const personaNormal = {
    nombre: "Juan",
    edad: 30,
    direccion: "Calle Principal",
    email: "juan@example.com",
};
const personaSinDireccion = {
    nombre: "Juan",
    edad: 30,
};
const personaSinEmail = {
    nombre: "Juan",
    edad: 30,
    direccion: "Calle Principal",
};
const personaParcial = {
    nombre: "Juan",
    edad: 30,
};
const personaConTelefono = {
    nombre: "Juan",
    edad: 30,
    telefono: "123456789",
};
console.log("personaNormal:", personaNormal);
console.log("personaSinDireccion:", personaSinDireccion);
console.log("personaSinEmail:", personaSinEmail);
console.log("personaParcial:", personaParcial);
console.log("personaConTelefono:", personaConTelefono);
