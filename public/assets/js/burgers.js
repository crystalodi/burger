$(function(){
  $(".add-burger").on("submit", function(event){
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      location.reload();
    });
  });
  $(".devour-burger").on("click", function(event){
    var id = $(this).data("id")
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: 1}
    }).then(function(){
      location.reload();
    });
  });
});