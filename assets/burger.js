// $(function (){
//     $(".new-burger").on("click", function (event){
//         var id = $(this).data("id");
//         var newBurger = $(this).data("newburger");

//         var burgerdevoured = {
//             burger: newBurger
//         };

//         $.ajax("/api/updateOne/" + id, {
//             type: "PUT",
//             data: burgerdevoured
//         }).then(
//             function()
//         {
//             console.log("changed sleep to", newBurger);
//             location.reload();
//         }
//     );
// });

// $(".create-form").on("submit", function(event){
//     event.preventDefault();
//     var newType = {
//         name: $("#ca").val().trim(),
//         burger: $("[name=burger]:checked").val().trim()
//     };
// $.ajax("/api/burgers/insertOne", {
//     type: "POST",
//     data: newBurger
// }).then (
//     function (){
//         console.log("created new burger");
//         location.reload();
//     }
// );
// });
// });