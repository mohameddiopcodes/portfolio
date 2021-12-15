const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/users')
const checkAuthorized = require('../config/checkAuthorized')

router.post('/', checkAuthorized, usersCtrl.login)

module.exports = router;
