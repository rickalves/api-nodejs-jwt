const User = require('../models/User'); // Importa o modelo de Usuário
const bcrypt = require('bcrypt'); // Importação do módulo bcrypt para criptografia de senhas

exports.getProfile = async (req, res) => {
    const user = await User.findByPk(req.user.userId); // Busca usuário pelo ID contido no token
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' }); // Retorna erro se usuário não for encontrado

    res.json(user); // Retorna os dados do usuário
};

exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findByPk(req.user.userId);

    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    // Verifica se a senha antiga está correta
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Senha antiga incorreta' });

    // Atualiza a senha criptografada
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: 'Senha alterada com sucesso!' });
};