var numberInput;
      // UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event){
     numberInput = parseInt($("input#num").val());
     display();
      event.preventDefault();
  });
//Business Logic
  function display(){
    $('#output').text('');
    for(var i=1;i<=numberInput;i++){
      if((i % 3==0) && (i % 5==0)){
        $('#output').append('<li>pingpong</li>');
      }
      else if(i % 5==0){
          $('#output').append('<li>pong</li>');
      }
      else if(i % 3==0){
          $('#output').append('<li>ping</li>');
      }
      else{
          $('#output').append('<li>'+i.toString()+'</li>');
      }
    }
  }

});
