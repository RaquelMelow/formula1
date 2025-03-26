import 'dotenv/config';
import mongoose from 'mongoose';
import Team from '../models/teamModel.js'; // Importa directamente el modelo aquí
import '../configs/db.config.js';

mongoose.connection.once('open', async () => {
  console.info(`Successfully connected to the database ${mongoose.connection.db.databaseName}`);

  try {
    // Crear un solo equipo manualmente
    const team = new Team({ name: 'Red Bull Racing' });
    await team.save();
    console.info('Equipo insertado manualmente:', team);
  } catch (error) {
    console.error('Error al insertar el equipo:', error);
  } finally {
    mongoose.connection.close();
    console.info('Conexión a la base de datos cerrada');
    process.exit(0);
  }
});
