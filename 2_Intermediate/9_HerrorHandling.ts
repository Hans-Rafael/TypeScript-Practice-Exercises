/* Error Handling:
Crea una función que maneje errores de tipo al intentar convertir un valor.
 */
// Función para manejar errores de tipo al intentar convertir un valor a número
function convertirANumero(valor: string | number | boolean | null | undefined): number | null {
    try {
        if (valor === null || valor === undefined) {
            throw new Error(`El valor es ${valor} y no se puede convertir a un número.`);
        }

        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new Error(`No se puede convertir el valor "${valor}" a un número.`);
        }
        return numero;
    } catch (error) {
        console.error((error as Error).message);
        return null; // Retornar null si ocurre un error
    }
}

// Ejemplos de uso de la función
const valores = ["123", "45.67", "abc", null, undefined, true, false, 42];

valores.forEach((valor) => {
    const resultado = convertirANumero(valor);
    console.log(`Valor: ${valor}, Resultado: ${resultado}`);
});
// SE espera:
/* console.log(Number("123")); // 123
console.log(Number("45.67")); // 45.67
console.log(Number("abc")); // NaN
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
 */