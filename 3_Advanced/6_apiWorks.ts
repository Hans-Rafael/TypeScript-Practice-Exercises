/* Trabajando con API:
Usa axios con TypeScript para consumir datos de una API pública. */
//axios on TS para TS npm install axios @types/axios

//defino los datos
interface Person {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// crear funcion para obtener datos
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getPeople(): Promise<Person[]> {
  try {
    const response = await axios.get<Person[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching people:", error);
    throw error;
  }
}
//Consumir la API
async function main() {
  const users = await getPeople();
  console.log("Usuarios obtenidos:");
  users.forEach((u) => {
    console.log(
      `#${u.id}:${u.name} - ${u.email}\n ADRESS: ${u.address.street} - ${u.address.city} \n PHONE: ${u.phone} \n `
    );
  });
}
// llamo la funcion y ejecuto.
main();

//Extensión: Búsqueda por ID
async function getPeopleById(id: number): Promise<Person> {
  try {
    const response = await axios.get<Person>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
}
// use example asinc/await y .then()
async function main2() {
  const user = await getPeopleById(2);
  console.log("Usuario obtenido por ID:");
  console.log(
    `#${user.id}:${user.name} - ${user.email}\n ADRESS: ${user.address.street} - ${user.address.city} \n PHONE: ${user.phone} \n `
  );
}
main2(); 
getPeopleById(1).then(user => {
    if (user) {
      console.log(`Usuario encontrado: ${user.name} - ${user.email}`);
    } else {
      console.log("Usuario no encontrado.");
    }
  });
  //
  //Obtener una lista de usuarios con map()
  async function fetchUsersByIds(ids: number[]) {
    try {
      const users = await Promise.all(ids.map(id => getPeopleById(id)));
      console.log("Usuarios obtenidos:", users);
    } catch (error) {
      console.error("Error obteniendo usuarios:", error);
    }
  }
  console.log("*** example get by IDs dinámicos *** ")
  fetchUsersByIds([1, 2, 3, 4, 5]);
  //usuarios por nombre de compañía
  async function getUsersByCompany(companyName: string): Promise<Person[]> {
    try {
      const users = await getPeople();
      return users.filter(user => user.company.name.toLowerCase() === companyName.toLowerCase());
    } catch (error) {
      console.error(`Error obteniendo usuarios de la compañía ${companyName}:`, error);
      throw error;
    }
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