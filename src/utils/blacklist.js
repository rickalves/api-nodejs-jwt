const Blacklist = require('../models/Blacklist'); // Importa o modelo de blacklist

module.exports = {
    // Adiciona um token à blacklist no MongoDB
    add: async (token) => {
        try {
            await Blacklist.create({ token }); // Insere o token na coleção
        } catch (err) {
            console.error('Erro ao adicionar token à blacklist:', err); // Loga erro caso falhe
        }
    },

    // Verifica se um token está na blacklist
    has: async (token) => {
        const exists = await Blacklist.findOne({ token }); // Busca o token na coleção
        return !! exists; // Retorna true se o token estiver na blacklist
    }
};