const mysql = require('mysql');

// Configurações para a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',       // Host do banco de dados
  user: 'root',     // Nome de usuário do banco de dados
  password: 'M414598',   // Senha do banco de dados
  database: 'cliente_avaliation',     // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem-sucedida com o banco de dados.');
});

module.exports = connection;
