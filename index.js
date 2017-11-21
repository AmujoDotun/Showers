var express = require('express');
var router = express.Router();


//protecting the password
//var Tokens = require('csrf')
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('signup', function (req, res, next) {
  res.render('signup', { csrfToken: req.csrfToken()});
});
router.post('signup', function (req, res, next) {
 res.redirect('/');
});
module.exports = router;




