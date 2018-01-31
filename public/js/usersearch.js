function recipeSearch(run) {
    var base_url = "https://api.edamam.com/search?&q=";
    var request_url = "&app_id=4a5d81a2&app_key=379308ab9da9a8ee47f63563d2774ac4&from=0&to=9&q=";
    var url = base_url + run + request_url;
    return url;
}

$(document).ready(function() {

    $("#perform").click(function() {

        event.preventDefault();
        console.log("User has clicked the button");
        var run = $("#search").val();
        var url = recipeSearch(run);
        console.log(run);

    $.ajax( {
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
        },
        error: function(errorMessage) {
            console.log("Error, try again");
        }
    });
    console.log("Search completed.");
    });
});