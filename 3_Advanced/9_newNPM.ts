/* Creación de un Package NPM:
Crea un paquete básico en TypeScript que pueda publicarse en NPM.
 */
//1- Crea un paquete npm con una función que devuelva un saludo.
function saludar(nombre:string):string{
    return `Hola ${nombre}`
}
console.log(saludar("Eva"))

//npm login
// compilar codigo: npm run build => En package.jeson script: "build": "tsc -p tsconfig.json"
//publicar paquete: npm publish --access public
//Después de publicar el paquete, puedes verificar que esté disponible en NPM ejecutando:
//npm info mi-paquete-ts