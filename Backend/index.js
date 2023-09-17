import express from 'express';
import cors from "cors";
import router from './routes/router.js';
import { dataBaseConnection } from './database/database.js';
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", router)

dataBaseConnection();

app.listen(PORT, HOST, () => {
  console.log(`Server active in http://localhost:${PORT}/api/v1`)
})