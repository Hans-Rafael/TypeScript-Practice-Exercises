"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Modules:
Divide un programa en múltiples archivos y usa export e import.
 */
const Persona_1 = require("./Persona");
const saludar_1 = require("./saludar");
const persona = new Persona_1.Persona('Juan', 25);
console.log(persona.describir());
console.log((0, saludar_1.saludar)(persona));
