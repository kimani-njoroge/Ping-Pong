var numberInput;
      // UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event){
     numberInput = parseInt($("input#num").val());
     display();
      event.preventDefault();
  });


});
