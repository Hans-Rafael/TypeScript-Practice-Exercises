// Crea una función genérica para encontrar el mayor elemento de un array.
function mayorElemento<T>(array: T[]): T {
    let mayorInArray: T = array[0];
    for (let i = 0; i < array.length; i++) {
        if (mayorInArray < array[i]) {
            mayorInArray = array[i];
        }
    }
    return mayorInArray;
}
// use function
let array = [1,5,6,4,3];
console.log("numero mayor del array: ",mayorElemento(array))

//Manipulación básica de objetos:
let persona: { nombre: string, edad: number } = { nombre: "Juan", edad: 30 };
persona.edad = 31;
console.log('persona:', persona); 