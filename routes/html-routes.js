// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // root route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/views/index.html"));
    });

    // signup route loads signup.html
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/views/signup.html"));
    });

    // signin route loads signin.html
    app.get("/signin", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/views/index.html"));
    });

    // search route loads search.html
    app.get("/search", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/views/index.html"));
    });

    // dashboard route loads dashboard.html
    app.get("/dashboard", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/views/index.html"));
    });

};