"use strict";
let numbers = [1, 2, 3, 4, 5];
let tupla = ["impar:", 1, "par:", 2];
let tupla2 = ["impar:", 1];
function identity(arg) {
    return arg;
}
let output1 = identity("Hola");
let output2 = identity(42);
console.log('output1:', output1);
console.log('output2:', output2);
