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
    })
  })
});