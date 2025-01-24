/* 
Generics Avanzados:
Escribe una función genérica que combine dos objetos en uno.
*/
//función genérica en TypeScript que combina dos objetos en uno:

function combinarObjetos<X, U > (obj: X, obj2: U): X & U {
    return { ...obj, ...obj2 };
  }
  // uso de la función:
  const objeto1 = { nombre: "Pepe Locuas", edad: 24 };
  const objeto2 = { email: "pepe@example.com", telefono:"+5411987546", matriz: [[1,2],[3,4]] };
  // Llamada a la función
const objetoCombinado = combinarObjetos(objeto1, objeto2);
console.log(objetoCombinado);
// Salida esperada: { nombre: "Pepe Locuas", edad: 24, email: "pepe@example.com", telefono: "1234567890" }