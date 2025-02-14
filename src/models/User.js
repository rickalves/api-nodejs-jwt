const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false }
}, {
    tableName: 'users', // Define explicitamente o nome da tabela
    timestamps: true,   // Mantém os campos created_at e updated_at
    underscored: true   // Usa snake_case para colunas automáticas (ex: created_at)
});

module.exports = User;
