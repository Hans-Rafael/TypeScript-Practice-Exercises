// Define un enum para los días de la semana y usa una función que reciba un día y devuelva si es laborable.
enum DiasLaborables {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes
  }
  
  function esDiaLaborable(dia: DiasLaborables): boolean {
    return dia >= DiasLaborables.Lunes && dia <= DiasLaborables.Viernes;
  }
// use function
console.log('esDiaLaborable(DiasLaborables.Miércoles):', esDiaLaborable(DiasLaborables.Miércoles));

// Arrays y Tuplas:
// Definición de un array de strings
let diasLaborables: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
// Definición de una tupla
let diasSemana: [string, string, string, string, string,string, string, number] = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 7];
console.log('diasLaborables:',diasLaborables,'diasSemana:', diasSemana);

