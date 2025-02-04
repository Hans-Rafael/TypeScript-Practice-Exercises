"use strict";
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    hacersonido() {
        return "Hace un sonido";
    }
}
class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    hacerSonido() {
        return " El perro ladra";
    }
    ladrar() {
        return "¡Guau Guau!";
    }
}
class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    hacerSonido() {
        return "El gato maúlla";
    }
    maullar() {
        return "¡Miau!";
    }
}
const perro = new Perro("Rex", 3);
console.log(perro.hacerSonido());
console.log(perro.ladrar());
const gato = new Gato("Misi", 2);
console.log(gato.hacerSonido());
console.log(gato.maullar());
