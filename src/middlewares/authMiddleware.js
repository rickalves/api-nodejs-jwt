const jwt = require('jsonwebtoken'); // Importa a biblioteca JWT para manipulação de tokens
const blacklist = require('../utils/blacklist'); // Importa a lista negra de tokens inválidos

module.exports = (req, res, next) => {
    // Obtém o token do cabeçalho Authorization (Bearer Token)
    const token = req.headers.authorization?.split(" ")[1];

    // Verifica se o token foi fornecido
    if (!token) {
        return res.status(401).json({ error: 'Token necessário' }); // Retorna erro se não houver token
    }

    // Verifica se o token está na lista negra (usuário fez logout)
    if (blacklist.has(token)) {
        return res.status(403).json({ error: 'Token inválido (usuário fez logout)' });
    }

    try {
        // Decodifica e verifica o token usando a chave secreta definida no .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Adiciona os dados do usuário à requisição
        next(); // Permite que a requisição prossiga para a próxima função
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado' }); // Retorna erro caso o token seja inválido ou tenha expirado
    }
};
