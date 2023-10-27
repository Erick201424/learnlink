import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

dotenv.config(); // Cargar la configuración de .env

const app = express();
const signale = new Signale();

app.use(express.json());

const port = process.env.PORT; // Utiliza el puerto definido en el archivo .env o 3000 como puerto por defecto

app.listen(port, () => {
    signale.success(`Server online in port ${port}`);
});
