const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const port = 3000;

// Importe as rotas relacionadas às avaliações
const avaliacoesRoutes = require('./routes/avaliacaoRoutes');

// Parsing json objects in to js objects
app.use(bodyParser.json());

// Rest security
app.use(helmet());

// Using cors for all requets
app.use(cors());

// Use as rotas relacionadas às avaliações
app.use(express.json()); // Para analisar o corpo da solicitação como JSON
app.use(avaliacoesRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
