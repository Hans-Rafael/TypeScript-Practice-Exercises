//3-Crea una función que acepte un parámetro que pueda ser un string o un número y devuelva su longitud o valor absoluto.
//Enum:
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log('c:', c);// retorna poscicion del color
let colorName: string = Color[0];
console.log('colorName:', colorName);
function abs(x: number | string): number {
    return Math.abs(typeof x === 'number' ? x : parseInt(x));
}
// use function
console.log('abs(-5):', abs(-5));
