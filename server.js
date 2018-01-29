// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 8080;

var passport = require('passport');
var flash    = require('connect-flash');

// configuration ===============================================================
// connect to our database

// require('./config/passport')(passport); // pass passport for configuration

//testtesttest

var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: 'da81ce22',
    appKey: '628619f77ba41aa72c5b3d4360601da6'
    // debug: true, // defaults to false 
});

app.get("/api", function (req, res) {

    console.log("Hello?");

    nutritionix.search.standard({
        q: 'crouton',
        // use these for paging 
        limit: 10,
        offset: 0,
        // controls the basic nutrient returned in search 
        search_nutrient: 'calories'
    }).then(successHandler, errorHandler)
        .catch(uncaughtExceptionHandler);

	console.log(res);

});
	
	///gtestetewtwetew

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//TEST



// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
