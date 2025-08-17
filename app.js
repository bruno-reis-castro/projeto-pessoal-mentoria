// Swagger UI
// ...existing code...

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
require('./swagger')(app);

// Rota raiz informativa
app.get('/', (req, res) => {
  res.send('Moto Market API está rodando! Use /motos para acessar os endpoints.');
});

app.use(cors());
app.use(express.json());

let motos = [];
let nextId = 1;

// Listar todas as motos
app.get('/motos', (req, res) => {
  res.json(motos);
});

// Cadastrar nova moto
app.post('/motos', (req, res) => {
  const { fabricante, modelo, ano } = req.body;
  if (!fabricante || !modelo || !ano) {
    return res.status(400).json({ error: 'Dados obrigatórios não preenchidos' });
  }
  const moto = { id: nextId++, ...req.body };
  motos.push(moto);
  res.status(201).json(moto);
});

// Editar moto
app.put('/motos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = motos.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Moto não encontrada' });
  motos[idx] = { ...motos[idx], ...req.body };
  res.json(motos[idx]);
});

// Excluir moto
app.delete('/motos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = motos.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Moto não encontrada' });
  motos.splice(idx, 1);
  res.status(204).end();
});


module.exports = app;
