var express = require('express');
var path = require('path');

var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var csurf = require('csurf');

//var flash = require("connect-flash");
var mongoose = require('mongoose');
var session = require('express-session');


var index = require('./routes/index');
var about = require('./routes/about');
var categories = require('./routes/categories');
var signup = require('./routes/signup');
var Women = require('./routes/Women');
var Men = require('./routes/Men');
var Babies = require('./routes/Babies');
var edit = require('./routes/edit');



var app = express();

//connect to database server
mongoose.connect("mongodb://localhost:27017/test" , { useMongoClient: true });
app.set("port", process.env.PORT || 4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'mySuperSecrete',
    resave: false,
    saveUninitialized: false
}));
app.use(require('csurf')());

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/categories', categories);
app.use('/signup', signup);
app.use('/Women', Women);
app.use('/Men', Men);
app.use('/Babies', Babies);
app.use('/edit', edit);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
