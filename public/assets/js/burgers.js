$(".devourButton").on("click", function(event) {
    
    var id = $(this).data("id");
    var devouredBy = {
        name: $("#devouredName"+id).val().trim()
    }
    
    $.ajax("/api/burger15s/" + id, {
        type: "PUT",
        data: devouredBy
    }).then(function(){
        

       location.reload();
    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#userInput").val().trim()
    };
    
    $.ajax("/api/burger15s", {
        type: "POST",
        data: newBurger
    }).then(function(){
        

        location.reload();
    });
});
