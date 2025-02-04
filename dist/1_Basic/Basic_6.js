"use strict";
function mayorElemento(array) {
    let mayorInArray = array[0];
    for (let i = 0; i < array.length; i++) {
        if (mayorInArray < array[i]) {
            mayorInArray = array[i];
        }
    }
    return mayorInArray;
}
let array = [1, 5, 6, 4, 3];
console.log("numero mayor del array: ", mayorElemento(array));
let persona = { nombre: "Juan", edad: 30 };
persona.edad = 31;
console.log('persona:', persona);
