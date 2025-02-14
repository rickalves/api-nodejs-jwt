const jwt = require('jsonwebtoken'); // Importa a biblioteca JSON Web Token

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Obtém o token do cabeçalho da requisição

    if (!token) return res.status(401).json({ error: 'Token necessário' }); // Retorna erro se não houver token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica e decodifica o token
        req.user = decoded; // Armazena os dados do usuário na requisição
        next(); // Passa para o próximo middleware ou rota
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido' }); // Retorna erro se o token for inválido
    }
};