"use strict";
function strictNumber(value) {
    if (typeof value !== "number") {
        throw new Error("El argumento no es un número");
    }
    return value;
}
function strictString(value) {
    if (typeof value !== "string") {
        throw new Error("El argumento no es una cadena");
    }
    return value;
}
const object = JSON.parse('{"nombre": "Alice"}');
console.log(object.nombre.toUpperCase());
console.log(strictNumber(42));
const text = strictString("Hola");
console.log(text.toUpperCase());
try {
    const errorCase = strictString(123);
    console.log(errorCase);
}
catch (error) {
    console.error("Error atrapado:", error);
}
console.log(text.toUpperCase());
const errorCase = strictString(123);
