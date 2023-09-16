const express = require('express');
const router = express.Router();
const db = require('../config/banco'); // Importe sua conexão com o banco de dados aqui

// Rota para inserir uma nova avaliação (POST)
router.post('/avaliacoes', (req, res) => {
  const { avaliador, avaliacao, comentarios } = req.body;

  // Execute a inserção no banco de dados (substitua com sua própria lógica)
  db.query(
    'INSERT INTO avaliacoes (avaliador, avaliacao, comentarios) VALUES (?, ?, ?)',
    [avaliador, avaliacao, comentarios],
    (err, result) => {
      if (err) {
        console.error('Erro ao inserir avaliação: ' + err);
        res.status(500).send('Erro ao inserir avaliação.');
      } else {
        res.status(201).json({ message: 'Avaliação inserida com sucesso!' });
      }
    }
  );
});

// Rota para obter todas as avaliações (GET)
router.get('/avaliacoes', (req, res) => {
  // Execute a consulta no banco de dados (substitua com sua própria lógica)
  db.query('SELECT * FROM avaliacoes', (err, results) => {
    if (err) {
      console.error('Erro ao consultar avaliações: ' + err);
      res.status(500).send('Erro ao consultar avaliações.');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
