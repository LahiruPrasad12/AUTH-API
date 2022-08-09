const express = require('express');
const authController = require('../Controllers/auth_controller');
const router = express.Router();


router.post('/signing', authController.login);
router.patch('/update-account',authController.protect, authController.updateMyAccount);
router.get('/logout', authController.protect, authController.logout);

module.exports = router;