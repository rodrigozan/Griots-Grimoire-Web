// environment.ts

// Importe o pacote dotenv e carregue as variáveis de ambiente do arquivo .env
require('dotenv').config();

export const environment = {
  production: false,
  apiUrl: process.env['API_URL'] || 'https://localhost:5277/api'
};
