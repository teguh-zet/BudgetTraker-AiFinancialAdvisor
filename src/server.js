const app = require('./app');
const config = require('./config/config');

const PORT = config.server.port || 5001;

app.listen(PORT, () => {
  console.log(`Server running on ${config.server.baseUrl}`);
});
