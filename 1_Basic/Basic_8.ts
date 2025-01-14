//Declara una variable de tipo unknown y úsala después de asegurarte de su tipo.
let valorDesconocido: unknown = "Hola, TypeScript!";

function isString(value: unknown): value is string {
    //console.log("typeof value: ",typeof value);
  return typeof value === "string";
}
// using function
if (isString(valorDesconocido)) {
  console.log(valorDesconocido.toUpperCase()); // Ahora puedes usar `valorDesconocido` como string
} else {
  console.log("El valor no es una cadena.");
}

//Operador ternario si no hay que reutilizar codigo
let valorDesconocido2: unknown = "Adios, TypeScript!";

const resultado = isString(valorDesconocido2)
  ? `Longitud de la cadena: ${valorDesconocido2.length}`
  : "El valor no es una cadena.";

console.log(resultado);
