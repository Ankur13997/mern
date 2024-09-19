const express = require('express');
const authentication = require('../controllers/auth-controller');
const router = express.Router();
const validate = require('../middlewares/validdate-middleware')
const {signupSchema,loginSchema} = require('../validators/auth-validators');


router.route('/').get(authentication.home);
router.route('/register').post(validate(signupSchema),authentication.register);
router.route('/login').post(validate(loginSchema),authentication.login);
module.exports = router;