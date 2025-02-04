"use strict";
const usuario1 = {
    id: 123,
    nombre: "John Doe",
    edad: 30,
    fechaCreacion: new Date(),
    email: "johndoe@example.com",
    telefono: "1234567890",
};
usuario1.direccion = "123 Main St";
console.log("direccion agregada: ", usuario1.direccion);
usuario1.apellido = "Doe";
usuario1.key = "valor cualquiera";
console.log(usuario1);
usuario1.nombre = "clarck ken";
console.log(usuario1);
class Cliente {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = new Date();
        this.email = "cliente@example.com";
    }
}
const cliente1 = new Cliente(2, "Ana Gómez");
console.log(cliente1.id);
console.log(cliente1.fechaCreacion);
cliente1.email = "ana.gomez@example.com";
console.log(cliente1);
