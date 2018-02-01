$(document).ready(function() {
    
    function recipeSearch(event) {
        event.preventDefault();
        $("#table_rows").empty();
        var run = $("#search").val();
        console.log(run);
        var base_url = "https://api.edamam.com/search?&q=";
        var request_url = "&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=";
        var url = base_url + run + request_url;
        $.ajax( {
            type: "GET",
            url: url,
            dataType: "jsonp",
            success: function(data) {
                console.log(data);

                //add new recipes to the table

                for (i = 0; i < 9; i++) {
                    var newButton = $("<button>");
                    newButton.addClass("btn btn-primary");
                    newButton.text("Save Recipe");
                    newButton.attr('id', 'myButton');
                    newButton.attr('data-value', i);
                    $("#table_rows").append ("<tr><td id = label_" + i + ">" + data.hits[i].recipe.label +  "</td>" + "<td id = ingredients_" + i + ">" + data.hits[i].recipe.ingredientLines + "</td>" + "<td class = btn_" + i + "></td></tr>"
                    );
                    $(".btn_" + i).append(newButton);
                }
            },
            error: function(errorMessage) {
                console.log("Error, try again");
            }
        });
    }


    //on click, log that the button has been clicked and run the search function

    function storeRecipe(index) {
        $.post("/api/recipes", {
            label: $('#label_' + index).text(),
            ingredientLines: $("#ingredients_" + index).text()
          })
    }


    $("#perform").on('click',recipeSearch);
    $(document).on('click', '#myButton', function(){
        var index = $(this).attr('data-value');
        storeRecipe(index);
    })
}); //document.ready ends here