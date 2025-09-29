// src/config/config.js
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config({ path: process.env.DOTENV_PATH || '.env' });

const caFromEnv = process.env.MYSQL_CA_CERT && process.env.MYSQL_CA_CERT.trim();
const caFromFile = process.env.MYSQL_CA_CERT_PATH
  ? fs.readFileSync(process.env.MYSQL_CA_CERT_PATH, 'utf8')
  : null;

const dialectOptions = caFromEnv || caFromFile ? { ssl: { ca: caFromEnv || caFromFile } } : {};

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    dialect: 'mysql',
    dialectOptions,
  },
  server: {
    port: parseInt(process.env.SERVER_PORT || '5001', 10),
    baseUrl: process.env.SERVER_BASE_URL || `http://localhost:${process.env.SERVER_PORT || 5001}`,
  },
  jwt: { secret: process.env.JWT_SECRET },
  llm: { gemini: process.env.GEMINI_API_KEY, openRouter: process.env.OPENROUTER_API_KEY },
};
