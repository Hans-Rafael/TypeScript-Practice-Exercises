"use strict";
let nombre = "Eva";
let edad = 41;
let esEstudiante = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, ¿Estudia?: ${esEstudiante}`);
function sum(a, b) {
    return a + b;
}
const result = sum(5, 10);
console.log(`La suma de 5 y 10 es: ${result}`);
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Eva", 41);
console.log(`Persona: ${persona1.nombre}, Edad: ${persona1.edad}`);
