"use strict";
/* Utilitarios de TypeScript:
Usa Pick, Omit, y Partial para manipular un objeto.*/
//**** Recordatorio ******
/* 1. Pick: Crea un tipo que contiene un subconjunto de las propiedades de un objeto.
Pick toma dos parámetros: el tipo del objeto y un conjunto de claves del objeto que quieres seleccionar.

2. Omit: Crea un tipo que excluye ciertas propiedades de un objeto.
Omit también toma dos parámetros: el tipo del objeto y un conjunto de claves del objeto que quieres excluir.

3. Partial: Hace que todas las propiedades de un objeto sean opcionales.
Partial convierte todas las propiedades de un tipo en opcionales. */
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
// imprimir todos los examples
console.log("personaNormal:", personaNormal);
console.log("personaSinDireccion:", personaSinDireccion);
console.log("personaSinEmail:", personaSinEmail);
console.log("personaParcial:", personaParcial);
console.log("personaConTelefono:", personaConTelefono);
