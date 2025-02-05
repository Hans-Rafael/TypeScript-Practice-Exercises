"use strict";
/* Trabajando con API:
Usa axios con TypeScript para consumir datos de una API pública. */
//axios on TS para TS npm install axios @types/axios
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// crear funcion para obtener datos
const axios_1 = __importDefault(require("axios"));
const API_URL = "https://jsonplaceholder.typicode.com/users";
function getPeople() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(API_URL);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching people:", error);
            throw error;
        }
    });
}
//Consumir la API
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield getPeople();
        console.log("Usuarios obtenidos:");
        users.forEach((u) => {
            console.log(`#${u.id}:${u.name} - ${u.email}\n ADRESS: ${u.address.street} - ${u.address.city} \n PHONE: ${u.phone} \n `);
        });
    });
}
// llamo la funcion y ejecuto.
main();
//Extensión: Búsqueda por ID
function getPeopleById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${API_URL}/${id}`);
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching user with ID ${id}:`, error);
            throw error;
        }
    });
}
// use example asinc/await y .then()
function main2() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getPeopleById(2);
        console.log("Usuario obtenido por ID:");
        console.log(`#${user.id}:${user.name} - ${user.email}\n ADRESS: ${user.address.street} - ${user.address.city} \n PHONE: ${user.phone} \n `);
    });
}
main2();
getPeopleById(1).then(user => {
    if (user) {
        console.log(`Usuario encontrado: ${user.name} - ${user.email}`);
    }
    else {
        console.log("Usuario no encontrado.");
    }
});
//
//Obtener una lista de usuarios con map()
function fetchUsersByIds(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield Promise.all(ids.map(id => getPeopleById(id)));
            console.log("Usuarios obtenidos:", users);
        }
        catch (error) {
            console.error("Error obteniendo usuarios:", error);
        }
    });
}
console.log("*** example get by IDs dinámicos *** ");
fetchUsersByIds([1, 2, 3, 4, 5]);
//usuarios por nombre de compañía
function getUsersByCompany(companyName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield getPeople();
            return users.filter(user => user.company.name.toLowerCase() === companyName.toLowerCase());
        }
        catch (error) {
            console.error(`Error obteniendo usuarios de la compañía ${companyName}:`, error);
            throw error;
        }
    });
}
// Ejemplo de uso
getUsersByCompany("Romaguera-Crona");
// mas Eficiente 
/* async function fetchUsersByCompany(companyName: string) {
  try {
    const response = await axios.get(`https://api.ejemplo.com/users?company=${companyName}`);
    const users = response.data;

    console.log(`Usuarios que trabajan en ${companyName}:`, users);
  } catch (error) {
    console.error("Error obteniendo usuarios:", error);
  }
}
// Uso
fetchUsersByCompany("Romaguera-Crona"); */ 
