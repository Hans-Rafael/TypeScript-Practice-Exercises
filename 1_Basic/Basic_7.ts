//Escribe una función en TS que tome un objeto y lo convierta en un array de claves.
const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};
function objToClave<T>(objeto: {}): string[] {
  const Claves: string[] = Object.keys(person1);
  return Claves;
}
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

