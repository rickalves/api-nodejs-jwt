require('dotenv').config(); // Carrega as variáveis de ambiente definidas no .env
const { Sequelize } = require('sequelize'); // Importa o Sequelize

// Cria uma nova instância do Sequelize com as credenciais do banco de dados
const sequelize = new Sequelize(
    process.env.DB_NAME, // Define o nome do banco de dados
    process.env.DB_USER, // Define o usuário do banco de dados
    process.env.DB_PASS, // Define a senha do banco de dados
    {
    host: process.env.DB_HOST, // Define o host do banco de dados
    dialect: process.env.DB_DIALECT // Define o tipo de banco de dados (PostgreSQL, MySQL, etc.)
});

module.exports = sequelize; // Exporta a conexão para ser utilizada nos modelos