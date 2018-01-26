var express = require('express');
var app = express();

var NutritionixClient = require('nutritionix');
var nutritionix = new NutritionixClient({
    appId: 'da81ce22',
    appKey: '628619f77ba41aa72c5b3d4360601da6'
    // debug: true, // defaults to false 
});

var foodSearch = function(req, res, next) {

    console.log("This is working");
};

app.use(foodSearch);

app.get("/api/", function(req, res) {

    nutritionix.search.standard({
        q:'salad',
        // use these for paging 
        limit: 10,
        offset: 0,
        // controls the basic nutrient returned in search 
        search_nutrient: 'calories'
      }).then(successHandler, errorHandler)
        .catch(uncaughtExceptionHandler);
});

app.listen(8080);