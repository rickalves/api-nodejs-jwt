const express = require('express'); // Importa o Express
const authController = require('../controllers/authController'); // Importa o controlador de autenticação

const router = express.Router(); // Cria um roteador do Express

router.post('/login', authController.login); // Rota de login

module.exports = router; // Exporta o roteador