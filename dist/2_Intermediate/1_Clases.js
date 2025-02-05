"use strict";
//Clases:
//Crea una clase Animal con propiedades y métodos. Extiéndela para crear Perro y Gato
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
        super(nombre, edad); //llamamos al constructor de la classe base
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
//Creating and testing instances
const perro = new Perro("Rex", 3);
console.log(perro.hacerSonido()); // "El perro ladra"
console.log(perro.ladrar()); //"Guau guau"
const gato = new Gato("Misi", 2);
console.log(gato.hacerSonido()); //"Gato maulla"
console.log(gato.maullar()); //"Miau"
