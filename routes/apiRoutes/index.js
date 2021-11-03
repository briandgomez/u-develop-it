//Index.js file acts as a 'central hub' that pulls everything together

const express = require('express');
const router = express.Router();

router.use(require('./partyRoutes'));
router.use(require('./candidateRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

module.exports = router;