module.exports = function(sequelize, DataTypes) {

  var savedRecipes = sequelize.define("savedRecipes", {

      label: DataTypes.TEXT,
      ingredientLines: DataTypes.TEXT

  });

  // savedRecipes.associate = function(models) {

  //     savedRecipes.hasMany(models.Post, {

  //         onDelete: "cascade"
  //     });
  // };

  //console.log("Test");
  return savedRecipes;


};









// var axios = require("axios");
// var express = require('express');
// var app = express();
// var bodyParser = ("body-parser");
// var exphbs = require("express-handlebars");

// //Pushing the array's return to the foodsearch view

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// //Get method for returning JSON object for user

// app.get("/food", function (req, res) {
// axios.get("https://api.edamam.com/search?&q=fried+chicken&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=", {
// })
// .then(function (response) {

//     var recipeRes = response.data.hits[1];
//     // console.log(recipeRes);
//     var finalObj = {
            
//         recipe: response.data.hits[5].recipe.label,
//         ingredients: response.data.hits[5].recipe.ingredientLines,
//         calories: response.data.hits[5].recipe.calories 
//     };
    
//     console.log(finalObj);

//     res.send(finalObj)

//   })
//   .catch(function (error) {
//     console.log(error);

//   });

// });


//   //for this

//   //if response is data hits recipe

//   //the

// // app.use(foodSearch);
// app.listen(8080);