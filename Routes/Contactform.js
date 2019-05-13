const express = require('express');

const contact = require('../Controllers/contact');
const router = express.Router();

//sends message to contact.sendmessage
router.post('/sendmessage', contact.sendmessage);

module.exports = router;