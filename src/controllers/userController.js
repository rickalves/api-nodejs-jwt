const User = require('../models/User'); // Importa o modelo de Usuário

exports.getProfile = async (req, res) => {
    const user = await User.findByPk(req.user.userId); // Busca usuário pelo ID contido no token
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' }); // Retorna erro se usuário não for encontrado

    res.json(user); // Retorna os dados do usuário
};