$(document).ready(function () {
    $(".new-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id")
        console.log(id);
        var newBurger = $(this).data("newburger");

        var burgerdevoured = {
            burger: newBurger
        };
        console.log(newBurger);

        // $.ajax("/api/updateOne/" + id, {
        //     type: "PUT",
        //     data: burgerdevoured
        // }).then(
        //     function () {
        //         console.log("changed sleep to", newBurger);
        //         location.reload();
        //     }
        // );

    });
    $("#createbutton").on("submit", function (event) {
        event.preventDefault();
        var newType = {
            name: $("#ca").val().trim(),
            burger: $("[name=burger]:checked").val().trim()
        };
        console.log ("click");
        console.log (newType);
        // $.ajax("/api/burgers/insertOne", {
        //     type: "POST",
        //     data: newBurger
        // }).then(
        //     function () {
        //         console.log("created new burger");
        //         location.reload();
        //     }
        // );
    });
});
