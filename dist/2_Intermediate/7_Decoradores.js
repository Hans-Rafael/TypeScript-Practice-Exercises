"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function medirTiempo(_target, _propertyKey, _descriptor) {
    const originalMethod = _descriptor.value;
    _descriptor.value = function (...args) {
        const inicio = performance.now();
        const resultado = originalMethod.apply(this, args);
        const fin = performance.now();
        console.log(`La función ${_propertyKey} tardó ${fin - inicio} milisegundos en ejecutarse.`);
        return resultado;
    };
    return _descriptor;
}
class Ejemplo {
    metodoEjemplo() {
        for (let i = 0; i < 1000000000; i++) { }
    }
}
__decorate([
    medirTiempo
], Ejemplo.prototype, "metodoEjemplo", null);
const ejemplo = new Ejemplo();
console.log('ejemplo: ', ejemplo);
ejemplo.metodoEjemplo();
