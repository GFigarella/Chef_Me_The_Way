var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
var port     = process.env.PORT || 8080;
var models = require("./models");

var passport = require('passport');
var flash    = require('connect-flash');

// configuration ===============================================================
// connect to our database

require('./config/passport')(passport); // pass passport for configuration



// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
=======
 
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
// app.listen(port);
// console.log('The magic happens on port ' + port);

models.sequelize
 .sync()
  .then( () => {
 		app.listener(port, () => console.log("Listening on: " + port));
  });
=======
 
 
//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
 
 
 
app.get('/', function(req, res) {
 
    res.render('index');
 
});
 
//Models
var models = require("./app/models");
 
//Routes
 
var authRoute = require('./app/routes/auth.js')(app,passport);
 
 
//load passport strategies
 
require('./app/config/passport/passport.js')(passport, models.user);
 
 
//Sync Database
 
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
 
app.listen(3000, function(err) {
 
    if (!err)
 
        console.log("Site is live");
         
    else console.log(err)
 
});
