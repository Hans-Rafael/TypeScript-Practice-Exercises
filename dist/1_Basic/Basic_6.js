"use strict";
// Crea una función genérica para encontrar el mayor elemento de un array.
function mayorElemento(array) {
    let mayorInArray = array[0];
    for (let i = 0; i < array.length; i++) {
        if (mayorInArray < array[i]) {
            mayorInArray = array[i];
        }
    }
    return mayorInArray;
}
// use function
let array = [1, 5, 6, 4, 3];
console.log("numero mayor del array: ", mayorElemento(array));
//Manipulación básica de objetos:
let persona = { nombre: "Juan", edad: 30 };
persona.edad = 31;
console.log('persona:', persona);
