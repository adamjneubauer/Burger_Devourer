$(function() {


  
    $("#submit-btn").on("click", function(event){
      event.preventDefault();
      // console.log($("#burger-name").val().trim());
      var newBurger = {
        name: $("#burger-name").val().trim()
      }
      console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          location.reload();
        });
  
        $("#burger-name").val(""); 
    });
  
    $(".devour-btn").on("click", function(event){
      var id = $(this).data("id");
      // console.log(id);
  
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: {
          devour: true
        }
      }).then(function(){
        // console.log("Sent to backend");
        console.log("Devoured:  "+id);
        location.reload();
      });
  
      
  
    });
  
    $(".delete-btn").on("click", function(event){
      var id = $(this).data("id");
  
      console.log(id);
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger: " + id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  
  
    });
  
  
  
  });
  