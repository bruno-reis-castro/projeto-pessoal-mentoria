const app = require('./app');
const port = 3001;
app.listen(port, () => {
  console.log(`API Moto Market rodando em http://localhost:${port}`);
});
