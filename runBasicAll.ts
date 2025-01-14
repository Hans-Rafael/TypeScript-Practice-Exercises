import * as fs from 'fs'; //Es el módulo de Node.js que permite interactuar con el sistema de archivos
import { execSync } from 'child_process'; //Es el módulo de Node.js que permite ejecutar comandos externos,para ejecutar cada archivo .ts con ts-node.

const dir = './1_Basic'; // Especifica la carpeta donde se encuentran los archivos .ts

fs.readdirSync(dir) // Lee la carpeta y devuelve un array con los nombres de los archivos
  .filter((file) => file.endsWith('.ts')) // Filtra los archivos que terminan con .ts
  .forEach((file) => { // Para cada archivo .ts
    console.log(`Ejecutando ${file}...`); // Imprime el nombre del archivo
    execSync(`npx ts-node ${dir}/${file}`, { stdio: 'inherit' }); // Ejecuta el archivo .ts con ts-node
  });
