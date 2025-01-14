//Declara un array de números y una tupla [string, number]. Realiza operaciones básicas con ellos.
//defino array
let numbers:number[] = [1,2,3,4,5];
// defino tupla
let tupla2 :[string,number] = ["impar:",1];
let tupla :[string,number,string,number] = ["impar:",1,"par:",2];
//Genéricos Simples:

function identity<T>(arg: T): T { //
    return arg;
}
let output1 = identity<string>("Hola");
let output2 = identity<number>(42);
console.log('output1:', output1);
console.log('output2:', output2);