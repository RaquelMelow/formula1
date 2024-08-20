import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRaces = async () => {
    try {
        const response = await api.get('/races');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching races');
    }
};

// Función para crear un equipo de juego
export const createGameTeam = async (teamData) => {
  try {
    const response = await api.post('/gameteams', teamData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating game team');
  }
};

// Función para obtener los equipos de juego de un usuario específico
export const getUserGameTeams = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/gameteams`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user game teams');
  }
};

// Función para actualizar un equipo de juego
export const updateGameTeam = async (gameTeamId, updatedData) => {
  try {
    const response = await api.put(`/gameteams/${gameTeamId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating game team');
  }
};

// Función para eliminar un equipo de juego
export const deleteGameTeam = async (gameTeamId) => {
  try {
    const response = await api.delete(`/gameteams/${gameTeamId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting game team');
  }
};




