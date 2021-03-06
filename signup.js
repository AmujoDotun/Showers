var express = require('express');
var passport = require("passport");
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('signup');
});
router.post("/signup", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ username: username }, function(err, user) {
        if (err) { return next(err); }
        if (user) {
            req.flash("error", "User already exists");
            return res.redirect("/signup");
        }
        var newUser = new User({
            username: username,
            password: password
        });

        //Saves the new user to the  database and continues to
        //the next request handler
        newUser.save(next);
    });
},
    //authenticates the user
    passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
}));
module.exports = router;