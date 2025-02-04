"use strict";
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
console.log('esDiaLaborable(DiasLaborables.Miércoles):', esDiaLaborable(DiasLaborables.Miércoles));
let diasLaborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
let diasSemana = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 7];
console.log('diasLaborables:', diasLaborables, 'diasSemana:', diasSemana);
