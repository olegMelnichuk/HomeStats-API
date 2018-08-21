var express = require('express');
var router = express.Router();

/*Connect controllers*/
var index = require('../controllers/index');

router
    .get('/', index.welcome);

module.exports = router;