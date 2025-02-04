"use strict";
class Animal2 {
    constructor(nombre, edad, energia) {
        this.nombre = nombre;
        this.edad = edad;
        this.energia = energia;
    }
    getEnergia() {
        return this.energia;
    }
    setEnergia(nuevaEnergia) {
        if (nuevaEnergia < 0) {
            console.error("La energía no puede ser negativa");
        }
        this.energia = nuevaEnergia;
    }
    hacerSonido() {
        return "Hace un sonido";
    }
}
class Perro2 extends Animal2 {
    constructor(nombre, edad, energia) {
        super(nombre, edad, energia);
    }
    getNombre() {
        return `El nombre del perro es ${this.nombre} `;
    }
    hacerSonido() {
        return "El perro ladra";
    }
}
class Gato2 extends Animal2 {
    constructor(nombre, edad, energia) {
        super(nombre, edad, energia);
    }
    hacerSonido() {
        return "El gato maúlla";
    }
}
const perro2 = new Perro2("Firulais", 3, 100);
const gato2 = new Gato2("Pelusa", 2, 80);
console.log(perro2.getNombre());
console.log(perro2.hacerSonido());
console.log(gato2.hacerSonido());
console.log(perro2.getEnergia());
perro2.setEnergia(-10);
console.log(perro2.getEnergia());
perro2.setEnergia(50);
console.log(perro2.getEnergia());
