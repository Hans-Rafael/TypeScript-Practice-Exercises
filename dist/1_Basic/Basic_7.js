"use strict";
//Escribe una función en TS que tome un objeto y lo convierta en un array de claves.
function objToClave(objeto) {
    return Object.keys(objeto);
}
// Ejemplo de uso
const person1 = {
    name: "John",
    age: 30,
    city: "New York",
};
console.log(objToClave(person1)); // ✅ ["name", "age", "city"]
console.log("array de claves del objeto person: ", objToClave(person1));
const person = {
    nombre: "John",
    edad: 30,
    ciudad: "New York",
};
//// Array2 de claves
const claves = Object.keys(person); // Garantiza que las claves coincidan con las del tipo `Persona`
const clavesV2 = ["nombre", "edad", "ciudad"];
console.log("claves:", claves);
console.log("clavesV2:", clavesV2);
const persona2 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
};
// Array de pares clave-valor
const entradas = Object.entries(persona2);
entradas.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
//Casting de tipos:
//OJO El casting no convierte el valor subyacente, simplemente cambia cómo lo interpreta TypeScript.
// Si haces un casting incorrecto, puedes introducir errores en tiempo de ejecución.
// using as
let valor = "123"; // Tipo desconocido
let longitud = valor.length; // Interpretar `valor` como string
console.log("Longitud:", longitud); // Salida: Longitud: 3
// using <type>
let valor2 = "123";
let longitud2 = valor.length; // Interpretar `valor` como string
console.log("Longitud:", longitud); // Salida: Longitud: 3
//example
function procesar(valor) {
    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    }
}
procesar("hola"); // Salida: HOLA
// forma simplificada:
console.log("******Forma Simplificada ********");
// Función que convierte un objeto en un array de claves
function objToClavex(objeto) {
    return Object.keys(objeto);
}
// Ejemplo 1: Uso con un objeto genérico
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
// Array de claves usando Object.keys
const clavesx = Object.keys(person); // Garantiza que las claves coincidan con `Persona`
// Alternativamente, se puede definir un array explícito
const clavesV2x = ["nombre", "edad", "ciudad"];
console.log("Claves obtenidas con Object.keys:", claves);
console.log("Claves definidas explícitamente:", clavesV2);
// Relación con valores usando Object.entries
const entradasx = Object.entries(person);
entradas.forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});
