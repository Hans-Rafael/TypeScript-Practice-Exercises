"use strict";
function combinarObjetos(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
const objeto1 = { nombre: "Pepe Locuas", edad: 24 };
const objeto2 = { email: "pepe@example.com", telefono: "+5411987546", matriz: [[1, 2], [3, 4]] };
const objetoCombinado = combinarObjetos(objeto1, objeto2);
console.log(objetoCombinado);
