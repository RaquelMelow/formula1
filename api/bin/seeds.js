import 'dotenv/config';
import mongoose from 'mongoose';
import { createTeam } from '../controllers/teamsController.js';  
import { teams } from '../constants/pilotsConstants.js';
console.log(teams); 
import connectDB from '../configs/db.config.js';

connectDB();

mongoose.connection.once('open', async () => {
  console.info(`Successfully connected to the database ${mongoose.connection.db.databaseName}`);

  try {
    console.log(teams)

    const teamPromises = teams.map((teamName) => createTeam({ name: teamName }));
    await Promise.all(teamPromises);

    console.info('Equipos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar los equipos:', error);
  } finally {
    mongoose.connection.close();
    console.info('Connection to database closed');
    process.exit(0);
  }
});
