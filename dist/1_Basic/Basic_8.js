"use strict";
let valorDesconocido = "Hola, TypeScript!";
function isString(value) {
    return typeof value === "string";
}
if (isString(valorDesconocido)) {
    console.log(valorDesconocido.toUpperCase());
}
else {
    console.log("El valor no es una cadena.");
}
let valorDesconocido2 = "Adios, TypeScript!";
const resultado = isString(valorDesconocido2)
    ? `Longitud de la cadena: ${valorDesconocido2.length}`
    : "El valor no es una cadena.";
console.log(resultado);
