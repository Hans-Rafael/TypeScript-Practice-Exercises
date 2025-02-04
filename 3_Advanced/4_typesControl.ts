// nota: let variable: unknown;
// Necesitas verificar el tipo antes de usarlo
/*
if (typeof variable === "string") {
    const resultado = variable.toUpperCase(); // ✅ Esto es seguro
  } else {
    console.log("No es una cadena");
  } 
*/
/* Control Estricto de Tipos:
Crea una función que valide el tipo de argumentos recibidos usando as. */
//1.Validar que un argumento sea un número
function strictNumber(value: unknown): number {
  if (typeof value !== "number") {
    throw new Error("El argumento no es un número");
  }
  return value as number; // Forzamos el tipo con as (type casting)
}
//2.Validar que un argumento sea una cadena específica
function strictString(value: unknown): string {
  if (typeof value !== "string") {
    throw new Error("El argumento no es una cadena");
  }
  return value as string;
}
// #3
const object = JSON.parse('{"nombre": "Alice"}') as { nombre: string };
console.log(object.nombre.toUpperCase()); // ✅ Seguro porque sabemos que "nombre" es string
//show use the function.
console.log(strictNumber(42));
const text = strictString("Hola"); //ok
console.log(text.toUpperCase());

// ❌ Caso incorrecto (debería lanzar un error)
try {
  const errorCase = strictString(123);
  console.log(errorCase);
} catch (error) {
  console.error("Error atrapado:", error);
}
console.log(text.toUpperCase());
const errorCase = strictString(123);
/*
Para diferenciar objetos de null, verifica primero que no sea null.
if (typeof valor === "object" && valor !== null) {
  console.log("Es un objeto");
} 
  Valores que devuelve typeof
Tipo de dato	Resultado de typeof
Número	           "number"
Cadena de texto	   "string"
Booleano	       "boolean"
BigInt	            "bigint"
Symbol	            "symbol"
Función	            "function"
Objeto (incluye null)	"object"
undefined	        "undefined"
 */
