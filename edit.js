var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function(req, res, next) {
    res.render('edit', { title: 'Edit your profiles and save it' });
});

module.exports = router;




