var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Women', { title: 'Women\'s world' });
});

module.exports = router;




