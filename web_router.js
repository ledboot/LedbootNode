const express = require('express');
const site = require('./controllers/site');

const router = express.Router();

router.get('/',site.index);

module.exports = router;