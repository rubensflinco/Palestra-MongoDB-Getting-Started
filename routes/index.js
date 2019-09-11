var express = require('express');
var config = require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ server: 'Online', host: config.api.host+':'+config.api.porta });
});

module.exports = router;
