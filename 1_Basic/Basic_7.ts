//Escribe una función en TS que tome un objeto y lo convierta en un array de claves.
function objToClave<T extends Record<string, unknown>>(objeto: T): string[] {
  return Object.keys(objeto);
}

// Ejemplo de uso
const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(objToClave(person1)); // ✅ ["name", "age", "city"]

console.log("array de claves del objeto person: ", objToClave(person1));
//usar un array de claves
interface Persona {
  nombre: string;
  edad: number;
  ciudad: string;
}
const person: Persona = {
  nombre: "John",
  edad: 30,
  ciudad: "New York",
};
//// Array2 de claves
const claves = Object.keys(person) as (keyof Persona)[]; // Garantiza que las claves coincidan con las del tipo `Persona`
const clavesV2: (keyof Persona)[] = ["nombre", "edad", "ciudad"];
console.log("claves:", claves);
console.log("clavesV2:", clavesV2);

//Relación con valores
interface Personax {
  nombre: string;
  edad: number;
  ciudad: string;
}

const persona2: Personax = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

// Array de pares clave-valor
const entradas = Object.entries(persona2) as [
  keyof Persona,
  Persona[keyof Persona]
][];

entradas.forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
//Casting de tipos:
//OJO El casting no convierte el valor subyacente, simplemente cambia cómo lo interpreta TypeScript.
// Si haces un casting incorrecto, puedes introducir errores en tiempo de ejecución.
// using as
let valor: unknown = "123"; // Tipo desconocido
let longitud: number = (valor as string).length; // Interpretar `valor` como string

console.log("Longitud:", longitud); // Salida: Longitud: 3
// using <type>
let valor2: unknown = "123";
let longitud2: number = (<string>valor).length; // Interpretar `valor` como string

console.log("Longitud:", longitud); // Salida: Longitud: 3
//example
function procesar(valor: unknown): void {
  if (typeof valor === "string") {
    console.log((valor as string).toUpperCase());
  }
}

procesar("hola"); // Salida: HOLA

// forma simplificada:
console.log("******Forma Simplificada ********");
// Función que convierte un objeto en un array de claves
function objToClavex<T extends object>(objeto: T): (keyof T)[] {
  return Object.keys(objeto) as (keyof T)[];
}

// Ejemplo 1: Uso con un objeto genérico
const person1x = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("Array de claves del objeto person1: ", objToClave(person1));

// Ejemplo 2: Usar un array de claves con una interfaz definida
interface Persona {
  nombre: string;
  edad: number;
  ciudad: string;
}

const personx: Persona = {
  nombre: "John",
  edad: 30,
  ciudad: "New York",
};

// Array de claves usando Object.keys
const clavesx = Object.keys(person) as (keyof Persona)[]; // Garantiza que las claves coincidan con `Persona`

// Alternativamente, se puede definir un array explícito
const clavesV2x: (keyof Persona)[] = ["nombre", "edad", "ciudad"];

console.log("Claves obtenidas con Object.keys:", claves);
console.log("Claves definidas explícitamente:", clavesV2);

// Relación con valores usando Object.entries
const entradasx = Object.entries(person) as [
  keyof Persona,
  Persona[keyof Persona]
][];

entradas.forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
