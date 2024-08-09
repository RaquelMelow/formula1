import axios from 'axios';

// Configuración base para las solicitudes a la API
const API_BASE_URL = 'http://localhost:3000/api/v1'; // Cambia esto según la URL de tu API

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Obtener todas las carreras
export const getRaces = async () => {
    try {
        const response = await api.get('/races');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching races');
    }
};




