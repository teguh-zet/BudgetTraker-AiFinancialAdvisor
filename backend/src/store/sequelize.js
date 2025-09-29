// // src/store/sequelize.js
// const { Sequelize } = require('sequelize');

// // Ambil semua config dari file JS
// const all = require('../config/config'); // -> { development: {..}, test: {..}, production: {..} }  (atau { db: {...} })
// const env = process.env.NODE_ENV || 'development';

// // Dukung dua bentuk: "by env" ATAU ".db"
// const cfg = all.db ? all.db : all[env];
// if (!cfg) {
//   throw new Error('DB config not found. Check src/config/config.js and NODE_ENV');
// }

// const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
//   host: cfg.host,
//   port: cfg.port,
//   dialect: cfg.dialect,
//   logging: false,
//   // jika di config.js kamu sudah menaruh dialectOptions.ssl, boleh langsung pakai cfg:
//   ...(cfg.dialectOptions ? { dialectOptions: cfg.dialectOptions } : {}),
//   // gunakan mysql2 sebagai driver
//   dialectModule: require('mysql2'),
// });

// // Cek koneksi saat boot
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('✅ Database connected');
//   } catch (e) {
//     console.error('❌ DB connection failed:', e.message);
//   }
// })();

// module.exports = sequelize;
// src/store/sequelize.js
const fs = require('fs');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: process.env.DOTENV_PATH || '.env' }); // <-- penting


const caFromEnv = process.env.MYSQL_CA_CERT && process.env.MYSQL_CA_CERT.trim();
const caFromFile = process.env.MYSQL_CA_CERT_PATH
  ? fs.readFileSync(process.env.MYSQL_CA_CERT_PATH, 'utf8')
  : null;

const sslConfig = caFromEnv || caFromFile ? { ca: caFromEnv || caFromFile } : undefined;

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false,
    dialectOptions: sslConfig ? { ssl: sslConfig } : {},
  }
);

// Tes koneksi saat boot
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
  } catch (e) {
    console.error('❌ Database connection failed:', e.message);
  }
})();

module.exports = sequelize;
