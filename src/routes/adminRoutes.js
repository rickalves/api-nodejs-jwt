const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdminMiddleware');
const adminController = require('../controllers/adminController');

const router = express.Router();

// Rota exclusiva para administradores
router.get('/dashboard', authMiddleware, isAdmin, adminController.getDashboard);

module.exports = router;
