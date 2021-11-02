const express = require('express');
const router = express.Router();
const ENDPOINTS = require('../endpoints')
const controller = require('../controllers/usersControllers')

router.get(ENDPOINTS.REGISTER, controller.register);

router.get(ENDPOINTS.LOGIN, controller.login);

module.exports = router;