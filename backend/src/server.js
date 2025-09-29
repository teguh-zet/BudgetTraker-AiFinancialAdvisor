// src/server.js
const config = require('./config/config');   // ← runtime config (punya .server)
const app = require('./app');

const PORT = config.server.port || 5001;
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
