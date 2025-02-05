"use strict";
/*
Generics Avanzados:
Escribe una función genérica que combine dos objetos en uno.
*/
//Generic <> puede serr usado en clases y interfaces tambien y cualquier tipo de datos puede ser utilizado.
//función genérica en TypeScript que combina dos objetos en uno:
function combinarObjetos(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
// uso de la función:
const objeto1 = { nombre: "Pepe Locuas", edad: 24 };
const objeto2 = { email: "pepe@example.com", telefono: "+5411987546", matriz: [[1, 2], [3, 4]] };
// Llamada a la función
const objetoCombinado = combinarObjetos(objeto1, objeto2);
console.log(objetoCombinado);
// Salida esperada: { nombre: "Pepe Locuas", edad: 24, email: "pepe@example.com", telefono: "1234567890" }
//
//📌👁‍🗨Podemos mejorar la función restringiendo X y U para que solo acepten objetos con extends Record<string, unknown>:
//✅ Solución mejorada
function combinarObjetos2(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
