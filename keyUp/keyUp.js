$(document).ready(function(){
  
  $("input").keyup(function(){
    $("input").css("background-color", "pink");
    $("input").alert('input', 'value');
  });
});