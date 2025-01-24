/* Decoradores:
Implementa un decorador para registrar el tiempo que tarda en ejecutarse una función. */

//Decorador para medir el tiempo de ejecución de una función
function medirTiempo(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void | PropertyDescriptor {
  //target es la funcion que se esta decorando
  //propertyKey es el nombre de la funcion que se esta decorando
  //descriptor es el objeto que contiene la funcion que se esta decorando
  // parameterIndex: Indice del parámetro en la función original
  const originalMethod = descriptor.value; // Obtengo la función original
  /* *****  Propiedades de PropertyDescriptor según el uso ***
Métodos: Utilizan value, enumerable, writable, y configurable.
Getters/Setters: Utilizan get, set, enumerable, y configurable.
Propiedades simples: Usan value, writable, enumerable, y configurable. */

  //Reemplazar el método original con uno que mide el tiempo de ejecución
  descriptor.value = function (...args: any[]) {
    const inicio = performance.now(); //inicia temporizador podria ser fecha Date.now()
    const resultado = originalMethod.apply(this, args); // Ejecuto la función original
    const fin = performance.now(); // tiempo final en milisegundos del temporizador
    console.log(
      `La función ${propertyKey} tardó ${
        fin - inicio
      } milisegundos en ejecutarse.`
    );
    return resultado;
  };
  return descriptor;
}

//Función decorada con el decorador
class Ejemplo {
  @medirTiempo
  metodoEjemplo() {
    // Simula una operación que tarda 1 segundo
    for (let i = 0; i < 1000000000; i++) {} // Tarea Pesada
  }
}
const ejemplo = new Ejemplo();
console.log('ejemplo: ', ejemplo);
ejemplo.metodoEjemplo();
