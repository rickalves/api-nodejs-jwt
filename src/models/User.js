const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição do modelo User, agora incluindo a role
const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false }, // Nome obrigatório
    email: { type: DataTypes.STRING, unique: true, allowNull: false }, // E-mail único e obrigatório
    role: { 
        type: DataTypes.ENUM('user', 'admin'), // Define os tipos de usuário
        defaultValue: 'user' // O padrão é usuário comum
    }
}, {
    tableName: 'users', // Define explicitamente o nome da tabela
    timestamps: true,   // Mantém os campos created_at e updated_at
    underscored: true   // Usa snake_case para colunas automáticas (ex: created_at)
});

module.exports = User;
