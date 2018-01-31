function recipeSearch(run) {
    var base_url = "https://api.edamam.com/search?&q=";
    var request_url = "&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=";
    var url = base_url + run + request_url;
    return url;
}

//variables stored globally

//make each new entry a button



$(document).ready(function() {

    var newButton = $("<button>");
    newButton.attr("type", "button");
     newButton.addClass("btn btn-default");

    //on click, log that the button has been clicked and run the search function

    $("#perform").click(function() {

        event.preventDefault();
        console.log("User has clicked the button");
        var run = $("#search").val();
        var url = recipeSearch(run);
        console.log(run);

        //perform call to API

    $.ajax( {
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function(data) {
            console.log(data);

            //add new recipes to the table

            for (i = 0; i < 9; i++) {

                $("#table_rows").append ("<tr><td>" + data.hits[i].recipe.label +  "</td>" + "<td>" + data.hits[i].recipe.ingredientLines + "</td>" + "<td><button type=button class=btn btn-default>Save Recipe</button>"+ "</td></tr>"
                );
               }
        },
        error: function(errorMessage) {
            console.log("Error, try again");
        }
    });

        // //clear out the previous search

        // $("#table_rows").clear();

    console.log("Search completed.");
    });
});