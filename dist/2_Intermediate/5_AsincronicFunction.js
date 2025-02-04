"use strict";
function fetchData(url) {
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/user/1") {
                resoleve({ mensaje: "Datos recividos correctos", codigo: 200 });
            }
            else {
                reject(new Error("API request failed"));
            }
        }, 2000);
    });
}
fetchData("https://api.example.com/user/1")
    .then(response => {
    console.log("Respuesta de la API:", response);
})
    .catch(error => {
    console.error("Error al obtener datos:", error.message);
});
