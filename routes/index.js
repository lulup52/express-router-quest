const express = require('express');
const tags = require('./tags');


const router = express.Router();

router.use('/tags', tags);

module.exports = router;