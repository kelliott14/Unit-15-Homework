$(".devourButton").on("click", function(event) {
    
    var id = $(this).data("id");
    var devouredBy = {
        name: $("#devouredName"+id).val().trim()
    }
    console.log(devouredBy)
    console.log(id)
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBy
    }).then(function(){
        console.log("devoured")

       // location.reload();
    });
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#userInput").val().trim()
    };
    console.log(newBurger)
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("added burger")

        location.reload();
    });
});
