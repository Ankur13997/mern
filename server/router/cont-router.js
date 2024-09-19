const express = require('express');
const fillContact = require('../controllers/contact-controller');
const router = express.Router();

router.post('/contact', fillContact);

module.exports = router;
