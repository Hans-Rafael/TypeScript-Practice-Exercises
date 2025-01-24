/* Modules:
Divide un programa en múltiples archivos y usa export e import.
 */
import { Persona } from './Persona';
import { saludar } from './saludar';

const persona = new Persona('Juan', 25);
console.log(persona.describir());
console.log(saludar(persona));
