//npx ts-node ./3_Advanced/script.ts
/* Types Condicionales:
Usa un tipo condicional para definir si una propiedad es opcional dependiendo de otra.
 */
//sar T con cualquier tipo primitivo, como string, number, boolean, objetos, etc.
//para limitar o obligar que un tipo genérico sea una extensión de un tipo específico
type AuthConfig<T extends boolean> = {
  isAuth: T;
  username: T extends true ? string : false; // obligatorio si true T debe ser string si no false
  password?: T extends true ? string : undefined; // No obligatorio pero si T true string sino undefined
};
// ejemplo de uso
const authConfig: AuthConfig<true> = {
  isAuth: true,
  username: "lola", //obligatorio
  password: "1234", // No obligatorio
};
const openConfig: AuthConfig<false> = {
  isAuth: false,
  username: false,
  password: undefined,
};
console.log("authConfig:", authConfig); //authConfig: { isAuth: true, username: 'lola', password: '1234' }
console.log("openConfig:", openConfig); // openConfig: { isAuth: false }
