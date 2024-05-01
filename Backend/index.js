import express from 'express';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/router.js';
import { dataBaseConnection } from './database/database.js';
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0';

// Determinar el directorio actual basado en la URL del módulo
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());

// Rutas API
app.use("/api/v1", router)

// Servir archivos estáticos del build de React
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Ruta para servir el archivo index.html del frontend en la ruta raíz
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

dataBaseConnection();

app.listen(PORT, HOST, () => {
  console.log(`Server active on port: ${PORT}`)
})