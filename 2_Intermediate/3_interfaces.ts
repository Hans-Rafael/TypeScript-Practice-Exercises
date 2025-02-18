//Interfaces Avanzadas:
//Define una interfaz que permita propiedades opcionales y de solo lectura.

//las propiedades opcionales se definen usando ? y
// las propiedades de solo lectura se definen usando readonly
interface Usuario {
  readonly id: number; // Propiedad de solo lectura
  nombre: string; // Propiedad obligatoria
  edad?: number; // Propiedad opcional
  readonly fechaCreacion: Date; // Propiedad de solo lectura
  email: string; // Propiedad obligatoria
  [key: string]: any; // Propiedad que permite agregar cualquier tipo de propiedad
  telefono?: string; // Propiedad opcional
}
//Uso de la Interfaz

const usuario1: Usuario = {
  id: 123, // obligatorio y solo lectura
  nombre: "John Doe", // obligatorio
  edad: 30, //opcional
  fechaCreacion: new Date(), //obligatorio y solo lectura
  email: "johndoe@example.com", //obligatorio
  telefono: "1234567890", // opcional
};

//Intentar cambiar el valor de una propiedad de solo lectura
//usuario1.id = 456; // Error: id es de solo lectura

//Intentar agregar una nueva propiedad
usuario1.direccion = "123 Main St"; // OK
console.log("direccion agregada: ", usuario1.direccion);

// Podemos añadir una propiedad opcional posteriormente
usuario1.apellido = "Doe"; // Sin error
usuario1.key = "valor cualquiera";

console.log(usuario1); // agrego sin error  direccion y apellido en el objeto

usuario1.nombre = "clarck ken"; // Sin error, pero no deberia utilizar en el código
//usuario1.fechaCreacion = new Date("2022-01-01");
console.log(usuario1);

class Cliente implements Usuario { //tomo solo lo que nesecito de la clases
    readonly id: number;
    nombre: string;
    readonly fechaCreacion: Date;
    email: string; // recordar usar las obligatoria o inicializar en el constructor
    telefono?: string;
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
      this.fechaCreacion = new Date();
      this.email = "cliente@example.com";
    }
  }
  
  const cliente1 = new Cliente(2, "Ana Gómez");
  console.log(cliente1.id); // 2
  console.log(cliente1.fechaCreacion); // Fecha actual
  
  cliente1.email = "ana.gomez@example.com"; // OK
  // cliente1.id = 3; // Error: Cannot assign to 'id' because it is a read-only property
  console.log (cliente1); // email cambiado a ana.gomez@example.com
