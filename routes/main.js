const express = require('express');
const router = express.Router();
const ENDPOINTS = require('../endpoints')
const controller = require('../controllers/mainControllers')

router.get(ENDPOINTS.HOME, controller.home);

module.exports = router;