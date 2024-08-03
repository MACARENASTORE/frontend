import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Cambia esto si tu backend está en otro puerto
  timeout: 10000, // Tiempo máximo de espera para una solicitud
  headers: {
    'Content-Type': 'application/json',
    // Añade otros headers necesarios aquí
  },
});

export default instance;
