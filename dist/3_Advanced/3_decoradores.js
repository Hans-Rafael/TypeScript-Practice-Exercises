"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Decoradores en Clases:
Crea un decorador que registre cada vez que se instancie una clase. */
function logClass(target) {
    console.log(`Clase ${target.name} instanciada`);
}
let MiClase = class MiClase {
    constructor() {
        console.log('Instancia de MiClase creada');
    }
};
MiClase = __decorate([
    logClass
], MiClase);
// Crear una instancia de la clase para que se registre
const instancia = new MiClase();
