var axios = require("axios");
var express = require('express');
var app = express();
var bodyParser = ("body-parser");
var exphbs = require("express-handlebars");

//test

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Perform a for loop through the API for the user

app.get("/food", function (req, res) {
axios.get("https://api.edamam.com/search?&q=chicken&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=", {
})
.then(function (response) {

    var recipeRes = response.data.hits[1];
    // console.log(recipeRes);
    var finalObj = {
            
        recipe: response.data.hits[0].recipe.label,
        ingredients: response.data.hits[0].recipe.ingredientLines,
        calories: response.data.hits[0].recipe.calories 
    };
    
    console.log(recipeRes);
    //loop
    // for (var i = 0; i < recipeRes.length; i++) {


    // }

    res.send(finalObj)
    // res.render("foodsearch", )
    // for (var i=0; i < recipeRes.length; i++) {

    //     return res.render("foodsearch", recipeRes[i]);

    // }

  })
  .catch(function (error) {
    console.log(error);

  });

});


  //for this

  //if response is data hits recipe

  //the

// app.use(foodSearch);
app.listen(8080);