var authController = require('../controllers/authcontroller.js');
var path = require ("path");
 
 
module.exports = function(app, passport) {
 
    app.get("/checkuser", function(req, res){
        console.log(req.user);
    });
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
    app.get('/search', function(req, res){
        res.sendFile(path.join(__dirname, "../../views/selection.html"));
    })
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);
 
 
 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}