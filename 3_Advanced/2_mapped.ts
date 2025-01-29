/* Mapped Types:
Implementa un tipo que convierta todas las propiedades de un objeto en opcionales.
 */
type MyObject = {
    name: string;
    age: number;
    isActive: boolean;
}
/* const obj1: MyObject = {
    name: "Alice", // obligatorio
    age: 30,       // obligatorio
     isActive: true, // obligatorio
  }; */
//transformar todas las propiedades de un objeto en opcionales
type MyObjectOptional = Partial< MyObject >;

// Ejemplo de uso:
const obj: MyObjectOptional = {
    name: "Alice", // Opcional
    age: 30,       // Opcional
    // isActive: true, // También es opcional
  };
  console.log(obj);
  
  //metodo 2

type Optional<T> = {
    [P in keyof T]?: T[P]; // Convierte todas las propiedades en opcionales
};

type ObjectOptional = Optional<MyObject>;

const object2: ObjectOptional = {
    name: "John",
    //age: 30,
    //isActive: true,
};
console.log(object2);
