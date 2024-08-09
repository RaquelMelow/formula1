import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.config.js';
import router from './configs/routes.config.js';

// Configuración
dotenv.config();
const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(morgan('dev')); // Registro de solicitudes
app.use(express.json()); // Parseo de cuerpos JSON
app.use(cors()); // Manejo de CORS

// Rutas
app.use('/api/v1', router);

// Manejadores de errores
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.info(`Application running at port ${port}`);
});

export default app;
