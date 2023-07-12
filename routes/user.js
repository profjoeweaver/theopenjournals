var express = require('express');
var router = express.Router();
var path = require('path');


/* Input for template: Page Tite for head, section for menu, content for body

/* GET home page. */
router.get('/user/', function(req, res) {
  res.render('userDash');
});

module.exports = router;