var express = require('express'), Sequelize = require('sequelize'), http = require('http'), restful   = require('sequelize-restful'), sequelize = new Sequelize('database', 'username', 'password'), app = express();
 
//API key and require

var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: 'da81ce22',
    appKey: '628619f77ba41aa72c5b3d4360601da6'
    // debug: true, // defaults to false 
});

// define all your models before the configure block 
 
app.configure(function() {
  app.use(restful(sequelize, { /* options */ }));
});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


//PLACEHOLDER CODE FOR npm CALL TO PACKAGE

// app.get("/api", function (req, res) {

//     console.log("Hello?");

//     nutritionix.search.standard({
//         q: 'crouton',
//         // use these for paging 
//         limit: 10,
//         offset: 0,
//         // controls the basic nutrient returned in search 
//         search_nutrient: 'calories'
//     }).then(successHandler, errorHandler)
//         .catch(uncaughtExceptionHandler);

//     console.log(res);
// });

// var foodSearch = function (req, res, next) {

//     console.log("This is working");

//     //testing for API return

//     // app.get("/api", function (req, res) {

//     //     console.log("Hello?");

//     //     nutritionix.search.standard({
//     //         q: 'crouton',
//     //         // use these for paging 
//     //         limit: 10,
//     //         offset: 0,
//     //         // controls the basic nutrient returned in search 
//     //         search_nutrient: 'calories'
//     //     }).then(successHandler, errorHandler)
//     //         .catch(uncaughtExceptionHandler);

//     //     console.log(res);
//     // });

// };

// app.use(foodSearch);

app.listen(8080);