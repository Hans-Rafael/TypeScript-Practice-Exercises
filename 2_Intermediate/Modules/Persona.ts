export class Persona {
    constructor(public nombre: string, public edad: number) {}

    describir(): string {
        return `${this.nombre} tiene ${this.edad} años.`;
    }
}
