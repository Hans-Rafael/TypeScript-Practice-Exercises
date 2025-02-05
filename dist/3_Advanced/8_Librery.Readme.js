"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
// 📌 Función que toma un array de objetos y los agrupa por una clave específica avoid usar any.
function agruparPorClave(array, key) {
    return lodash_1.default.groupBy(array, key);
}
//Datos ejemplos
const users = [
    { name: "Alice", age: 30, city: "Madrid" },
    { name: "Bob", age: 25, city: "Barcelona" },
    { name: "Alice", age: 35, city: "Madrid" },
];
//agrup by city
console.log(agruparPorClave(users, "city"));
//agrup by name
console.log(agruparPorClave(users, "name"));
// 📌 Obtiene un valor seguro dentro de un objeto anidado
const user = { profile: { name: "John", age: 30, city: "Madrid" } };
const userName = lodash_1.default.get(user, "profile.name", "Default Name");
console.log(userName); //John
// 📌 Clona un objeto de manera profunda
const cloneUser = lodash_1.default.cloneDeep(user);
console.log(cloneUser); // {name: "John", age: 30,city:"Madrid" }
// 📌 Elimina valores falsy (null, undefined, "", 0, NaN) de un array
const array = [1, null, 2, undefined, 3, "", 4, 0, NaN, 5];
const cleanArray = lodash_1.default.compact(array);
console.log(cleanArray); //[1,2,3,4,5]
// 📌 Filtra usuarios mayores de 25 años
const olderUsers = lodash_1.default.filter(users, (user) => user.age > 25);
console.log(olderUsers);
/*[{ name: "Alice", age: 30,city:"Madrid" },{ name: "Alice", age: 35,city:"Madrid" }] */
