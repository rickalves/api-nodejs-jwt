const express = require('express'); // Importa o Express
const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação
const userRoutes = require('./routes/userRoutes'); // Importa as rotas de usuário
const adminRoutes = require('./routes/adminRoutes'); // Importa as rotas de admin

const app = express(); // Cria uma instância do Express

app.use(express.json()); // Middleware para interpretar JSON
app.use('/auth', authRoutes); // Define as rotas de autenticação
app.use('/user', userRoutes); // Define as rotas de usuário
app.use('/admin', adminRoutes); // Define as rotas de usuário

module.exports = app; // Exporta a instância do Express