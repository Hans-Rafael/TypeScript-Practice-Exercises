"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    describir() {
        return `${this.nombre} tiene ${this.edad} años.`;
    }
}
exports.Persona = Persona;
