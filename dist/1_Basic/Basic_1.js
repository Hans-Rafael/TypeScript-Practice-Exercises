"use strict";
//intalar libreria: npm install ts-node --save-dev
//Run:npx ts-node ./1_Basic/Basic_1.ts
//Declara variables con tipos explícitos: string, number, boolean.
//1_Basic/Basic_1.ts
// Variables con tipos explícitos
let nombre = "Eva";
let edad = 41;
let esEstudiante = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, ¿Estudia?: ${esEstudiante}`);
//Crea una función que reciba dos números y devuelva su suma.
// Función que suma dos números
function sum(a, b) {
    return a + b;
}
// Usando la función
const result = sum(5, 10);
console.log(`La suma de 5 y 10 es: ${result}`);
//Crea una clase llamada Persona con dos atributos: nombre y edad.
// Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
// Instanciando la clase Persona
const persona1 = new Persona("Eva", 41);
console.log(`Persona: ${persona1.nombre}, Edad: ${persona1.edad}`);
