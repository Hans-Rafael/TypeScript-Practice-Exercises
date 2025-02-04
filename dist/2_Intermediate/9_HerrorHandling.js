"use strict";
function convertirANumero(valor) {
    try {
        if (valor === null || valor === undefined) {
            throw new Error(`El valor es ${valor} y no se puede convertir a un número.`);
        }
        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new Error(`No se puede convertir el valor "${valor}" a un número.`);
        }
        return numero;
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}
const valores = ["123", "45.67", "abc", null, undefined, true, false, 42];
valores.forEach((valor) => {
    const resultado = convertirANumero(valor);
    console.log(`Valor: ${valor}, Resultado: ${resultado}`);
});
