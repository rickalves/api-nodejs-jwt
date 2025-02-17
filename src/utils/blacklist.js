const blacklist = new Set(); // Lista negra de tokens inválidos

module.exports = {
    add: (token) => blacklist.add(token), // Adiciona um token à blacklist
    has: (token) => blacklist.has(token), // Verifica se o token está na blacklist
};