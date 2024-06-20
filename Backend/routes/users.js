var express = require('express');
var router = express.Router();
const userController = require('../Controllers/userController');

/* GET users listing. */
router.get('/login', userController.login_get);

router.post('/login', userController.login_post);

router.get('/register', userController.register_get);

router.post('/register', userController.register_post);

router.get('/logout', userController.logout);

module.exports = router;
