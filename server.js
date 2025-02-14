require('dotenv').config(); // Carrega as variáveis de ambiente
const app = require('./src/app'); // Importa o aplicativo
const sequelize = require('./src/config/database'); // Importa a conexão com o banco

const PORT = process.env.PORT || 3000; // Define a porta do servidor

(async () => {
    try {
        // cria tabelas de forma automática no banco de dados!
        // await sequelize.sync(); // Sincroniza os modelos com o banco de dados
        // console.log('Banco de dados sincronizado.');

        await sequelize.authenticate(); // Apenas autentica no banco, sem sincronizar tabelas
        console.log('Conexão bem-sucedida ao banco de dados.');

        app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`)); // Inicia o servidor
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error); // Exibe erro caso a conexão falhe
    }
})();