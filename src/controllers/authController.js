const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
