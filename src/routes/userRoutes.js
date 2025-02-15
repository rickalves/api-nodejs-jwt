const express = require('express'); // Importa o Express
const userController = require('../controllers/userController'); // Importa o controlador de usuário
const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação

const router = express.Router(); // Cria um roteador do Express

// Rota protegida para perfil do usuário
router.get('/profile', authMiddleware, userController.getProfile); 

module.exports = router; // Exporta o roteador
