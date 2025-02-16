const jwt = require('jsonwebtoken'); //importa o jwt
const User = require('../models/User'); //importa modelo do banco de dados
const blacklist = require('../utils/blacklist');//Importa blacklist para invalidar tokens


//cria rota para login
exports.login = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

    // Gera o Access Token (expira em 15 minutos)
    const accessToken = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );

    // Gera o Refresh Token (expira em 7 dias)
    const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );

    res.json({ accessToken, refreshToken });
};

//cria rota para refreshToken
exports.refreshToken = (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ error: 'Token necessário' });

    try {
        // Valida o Refresh Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Gera um novo Access Token
        const newAccessToken = jwt.sign(
            { userId: decoded.userId, role: decoded.role },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        res.json({ accessToken: newAccessToken });
    } catch (err) {
        return res.status(403).json({ error: 'Token inválido ou expirado' });
    }
};

//cria rota para logout
exports.logout = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(400).json({ error: 'Token não fornecido' });

    blacklist.add(token); // Adiciona o token à lista negra

    res.json({ message: 'Logout realizado com sucesso!' });
};
