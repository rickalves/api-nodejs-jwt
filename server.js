require('dotenv').config(); // Carrega as variáveis de ambiente
const app = require('./src/app'); // Importa o aplicativo
const sequelize = require('./src/config/database'); // Importa a conexão com o banco

const PORT = process.env.PORT || 3000; // Define a porta do servidor

(async () => {
    try {
        await sequelize.authenticate(); // Testa a conexão com o banco
        console.log('Conexão com o banco de dados estabelecida.');

        // await sequelize.sync({ alter: true }); // Atualiza a estrutura das tabelas sem perder dados
        // console.log('Banco de dados sincronizado.');

        await sequelize.sync({ force: true });// Atualiza a estrutura das tabelas e deleta dados
        console.log('Banco de dados sincronizado.');

        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`)); // Inicia o servidor
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error); // Exibe erro caso a conexão falhe
    }
})();