"use strict";
/* Decoradores:
Implementa un decorador para registrar el tiempo que tarda en ejecutarse una función. */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador para medir el tiempo de ejecución de una función
function medirTiempo(_target, _propertyKey, _descriptor) {
    //target es la funcion que se esta decorando
    //propertyKey es el nombre de la funcion que se esta decorando
    //descriptor es el objeto que contiene la funcion que se esta decorando
    // parameterIndex: Indice del parámetro en la función original
    const originalMethod = _descriptor.value; // Obtengo la función original
    /* *****  Propiedades de PropertyDescriptor según el uso ***
  Métodos: Utilizan value, enumerable, writable, y configurable.
  Getters/Setters: Utilizan get, set, enumerable, y configurable.
  Propiedades simples: Usan value, writable, enumerable, y configurable. */
    //Reemplazar el método original con uno que mide el tiempo de ejecución
    _descriptor.value = function (...args) {
        const inicio = performance.now(); //inicia temporizador podria ser fecha Date.now()
        const resultado = originalMethod.apply(this, args); // Ejecuto la función original
        const fin = performance.now(); // tiempo final en milisegundos del temporizador
        console.log(`La función ${_propertyKey} tardó ${fin - inicio} milisegundos en ejecutarse.`);
        return resultado;
    };
    return _descriptor;
}
//Función decorada con el decorador
class Ejemplo {
    metodoEjemplo() {
        // Simula una operación que tarda 1 segundo
        for (let i = 0; i < 1000000000; i++) { } // Tarea Pesada
    }
}
__decorate([
    medirTiempo
], Ejemplo.prototype, "metodoEjemplo", null);
const ejemplo = new Ejemplo();
console.log('ejemplo: ', ejemplo);
ejemplo.metodoEjemplo();
