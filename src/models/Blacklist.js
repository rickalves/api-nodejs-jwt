const mongoose = require('mongoose'); // Importa o mongoose para manipulação do MongoDB

const BlacklistSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true }, // Token JWT invalidado
    createdAt: { type: Date, default: Date.now, expires: 3600 } // Expira automaticamente após 1 hora
});

module.exports = mongoose.model('Blacklist', BlacklistSchema); // Exporta o modelo para ser usado no projeto