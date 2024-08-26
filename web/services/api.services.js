import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Obtener todos los usuarios
export const getUser = async (userId) => {
  try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
  } catch (error) {
      throw new Error('Error fetching user');
  }
};

// Crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// Actualizar un usuario existente
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await api.put(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

// Eliminar un usuario
export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

export const getRaces = async () => {
    try {
        const response = await api.get('/races');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching races');
    }
};

export const getAllPilots = async () => {
  try {
    const response = await api.get('/pilots');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching pilots');
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




