//Index.js file acts as a 'central hub' that pulls everything together

const express = require('express');
const router = express.Router();

router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));

module.exports = router;