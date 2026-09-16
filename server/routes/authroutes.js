const express = require('express');
const { register, login } = require('../controllers/authControllers');
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new user (Student / Admin)
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user & get JWT token
router.post('/login', login);

module.exports = router;