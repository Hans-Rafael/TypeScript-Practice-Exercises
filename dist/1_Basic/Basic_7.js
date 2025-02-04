"use strict";
function objToClave(objeto) {
    return Object.keys(objeto);
}
const person1 = {
    name: "John",
    age: 30,
    city: "New York",
};
console.log(objToClave(person1));
console.log("array de claves del objeto person: ", objToClave(person1));
const person = {
    nombre: "John",
    edad: 30,
    ciudad: "New York",
};
const claves = Object.keys(person);
const clavesV2 = ["nombre", "edad", "ciudad"];
console.log("claves:", claves);
console.log("clavesV2:", clavesV2);
const persona2 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
};
const entradas = Object.entries(persona2);
entradas.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
let valor = "123";
let longitud = valor.length;
console.log("Longitud:", longitud);
let valor2 = "123";
let longitud2 = valor.length;
console.log("Longitud:", longitud);
function procesar(valor) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    }
}
procesar("hola");
console.log("******Forma Simplificada ********");
function objToClavex(objeto) {
    return Object.keys(objeto);
}
const person1x = {
    name: "John",
    age: 30,
    city: "New York",
};
console.log("Array de claves del objeto person1: ", objToClave(person1));
const personx = {
    nombre: "John",
    edad: 30,
    ciudad: "New York",
};
const clavesx = Object.keys(person);
const clavesV2x = ["nombre", "edad", "ciudad"];
console.log("Claves obtenidas con Object.keys:", claves);
console.log("Claves definidas explícitamente:", clavesV2);
const entradasx = Object.entries(person);
entradas.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
