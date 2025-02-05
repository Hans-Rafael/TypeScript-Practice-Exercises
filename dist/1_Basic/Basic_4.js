"use strict";
// Define un enum para los días de la semana y usa una función que reciba un día y devuelva si es laborable.
var DiasLaborables;
(function (DiasLaborables) {
    DiasLaborables[DiasLaborables["Lunes"] = 0] = "Lunes";
    DiasLaborables[DiasLaborables["Martes"] = 1] = "Martes";
    DiasLaborables[DiasLaborables["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasLaborables[DiasLaborables["Jueves"] = 3] = "Jueves";
    DiasLaborables[DiasLaborables["Viernes"] = 4] = "Viernes";
})(DiasLaborables || (DiasLaborables = {}));
function esDiaLaborable(dia) {
    return dia >= DiasLaborables.Lunes && dia <= DiasLaborables.Viernes;
}
// use function
console.log('esDiaLaborable(DiasLaborables.Miércoles):', esDiaLaborable(DiasLaborables.Miércoles));
// Arrays y Tuplas:
// Definición de un array de strings
let diasLaborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
// Definición de una tupla
let diasSemana = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 7];
console.log('diasLaborables:', diasLaborables, 'diasSemana:', diasSemana);
