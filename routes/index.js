var express = require('express');
var router = express.Router();
var path = require('path');


/* Input for template: Page Tite for head, section for menu, content for body

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/index', function(req, res) {
  res.render('index');
});

/* GET psychology home page*/
router.get('/psychology', function(req, res){
  res.render('psychology');
});

/* GET The Open Journal home page*/
router.get('/theopenjournal', function(req, res){
  res.render('theopenjournal');
});

/* GET Log In page */
router.get('/login', function(req,res){
  res.render('login')
})

/* GET Sign Up page */
router.get('/signup', function(req,res){
  res.render('signup')
})

module.exports = router;
