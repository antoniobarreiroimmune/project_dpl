const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.get('/:userId', userController.getUser);

module.exports = router;