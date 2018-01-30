var axios = require("axios");
var express = require('express');
var app = express();
var bodyParser = ("body-parser");

//Perform a for loop through the API for the user

axios.get("https://api.edamam.com/search?&q=chicken&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=", {
})
.then(function (response) {
    console.log(response.data.hits);
  })
  .catch(function (error) {
    console.log(error);
  });

//   var recipeRes = response.data.hits.recipe;

//   res.render

  //for this

  //if response is data hits recipe

  //the

// app.use(foodSearch);
app.listen(8080);