"use strict";
/* Funciones Asíncronas:
Escribe una función fetchData que simule una llamada a una API con Promise. */
function fetchData(url) {
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/user/1") {
                // URL de prueba
                resoleve({ mensaje: "Datos recividos correctos", codigo: 200 });
            }
            else {
                reject(new Error("API request failed"));
            }
        }, 2000); // Simulando tiempo demora de 2 segundos como real llamada a la API
    });
}
// Ejemplo de uso de la función
fetchData("https://api.example.com/user/1")
    .then(response => {
    console.log("Respuesta de la API:", response); // devuelve: { mensaje: "Datos recividos correctos", codigo: 200 }
})
    .catch(error => {
    console.error("Error al obtener datos:", error.message);
});
