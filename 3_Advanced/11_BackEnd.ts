/* Backend con Express:
Crea un pequeño servidor Express con TypeScript que tenga un endpoint para recibir datos. */
// first install experss y nodemon
//npm install express
//npm install --save-dev @types/express
//npm install --save-dev typescript @types/node ts-node nodemon
//En package.json scripts": { "dev": "nodemon ./3_Advanced/11_BackEnd.ts
// Servidor usually in servidor en src/index.ts but for this practice at ./3_Advanced/11_BackEnd.ts
// para prueba en otra terminal luego de correr en otra npm run dev
//curl -X POST http://localhost:3000/data -H "Content-Type: application/json" -d '{"name":"Juan", "age":30}'
import express from "express"; //{ Request, Response }

const app = express();
const PORT = 3000; // default port

app.use(express.json()); // Middleware para JSON

// Definir el tipo de datos esperados
interface DataPayload {
  name: string;
  age: number;
}

// Endpoint para recibir datos
app.post("/data", (req: express.Request, res: express.Response): void => {
    const { name, age } = req.body as DataPayload;

    if (!name || !age) {
        res.status(400).json({ error: "Faltan datos requeridos" });
        return;
    }

    res.json({ message: `Datos recibidos=> nombre: ${name}, Edad: ${age}` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});