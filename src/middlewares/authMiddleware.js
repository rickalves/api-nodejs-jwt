const jwt = require('jsonwebtoken'); // Importa a biblioteca JWT para manipulação de tokens
const blacklist = require('../utils/blacklist'); // Importa a lista negra de tokens inválidos

module.exports = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Obtém o token do cabeçalho Authorization

    if (!token) {
        return res.status(401).json({ error: 'Token necessário' }); // Retorna erro caso o token não seja fornecido
    }

    const isBlacklisted = await blacklist.has(token); // Verifica se o token está na blacklist
    if (isBlacklisted) {
        return res.status(403).json({ error: 'Token inválido (usuário fez logout)' }); // Retorna erro caso o token seja inválido
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica e decodifica o token JWT
        req.user = decoded; // Adiciona os dados do usuário autenticado à requisição
        next(); // Permite que a requisição continue
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado' }); // Retorna erro caso o token seja inválido ou tenha expirado
    }
};
