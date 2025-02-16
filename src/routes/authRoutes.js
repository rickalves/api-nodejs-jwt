const express = require('express'); // Importa o Express
const authController = require('../controllers/authController'); // Importa o controlador de autenticação
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router(); // Cria um roteador do Express

router.post('/login', authController.login); // Rota de login

router.post('/refresh', authController.refreshToken);//Rota para o refresh token

router.post('/logout', authMiddleware, authController.logout); // Logout protegido por autenticação

module.exports = router; // Exporta o roteador