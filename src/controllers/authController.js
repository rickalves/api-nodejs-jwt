const jwt = require('jsonwebtoken'); // Importa a biblioteca JWT
const User = require('../models/User'); // Importa o modelo de Usuário

exports.login = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } }); // Busca usuário pelo e-mail

    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' }); // Retorna erro se usuário não existir

    const token = jwt.sign({ userId: user.id , role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h' }); // Gera token válido por 1 hora
    res.json({ token }); // Retorna o token para o cliente
};