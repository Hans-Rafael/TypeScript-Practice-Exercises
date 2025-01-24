import { Persona } from './Persona';

export function saludar(persona: Persona): string {
    return `Hola, ${persona.nombre}!`;
}
