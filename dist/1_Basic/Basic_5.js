"use strict";
//Declara un array de números y una tupla [string, number]. Realiza operaciones básicas con ellos.
//defino array
let numbers = [1, 2, 3, 4, 5];
// defino tupla is array of two elements of type string and number 
let tupla = ["impar:", 1, "par:", 2];
let tupla2 = ["impar:", 1];
//Genéricos Simples:
function identity(arg) {
    return arg;
}
let output1 = identity("Hola");
let output2 = identity(42);
console.log('output1:', output1);
console.log('output2:', output2);
