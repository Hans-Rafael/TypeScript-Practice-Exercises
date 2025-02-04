/* Decoradores en Clases:
Crea un decorador que registre cada vez que se instancie una clase. */
function logClass(target: Function) {
    console.log(`Clase ${target.name} instanciada`);
}
@logClass
class MiClase {
    constructor() {
        console.log('Instancia de MiClase creada');
    }
}
// Crear una instancia de la clase para que se registre
const instancia = new MiClase();