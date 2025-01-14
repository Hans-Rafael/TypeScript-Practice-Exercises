//Run:npx ts-node ./1_Basic/Basic_2.ts
//2-Define una interfaz User con propiedades como name, age, y email.
interface User {
    name:string,
    age: number,
    email: string
}
//Crea una función que reciba un User y devuelva un string con sus datos formateados.
function registerUser(user:User):string{
    return `Name: ${user.name}, \n Age: ${user.age}, \n Email: ${user.email}`
}

// Instanciando la clase
let usuario:User = {
    name: "Eva",
    age: 41,
    email: "XXXXXXXXXXXXX"
}
//Usando la función
console.log(registerUser(usuario))
//Union types:
let variable: string | number = "Hola"; // por defecto es hola
variable = 42;
console.log('variable:', variable);