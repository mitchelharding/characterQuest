$(document).ready(function(){

    $("form#form-group").submit(function(event){


      var results =[""];

      results.map(function(result){
      var chosen = $("select option: checked" + result).val();
      $("." + result).text();

      )};
      alert(chosen);
      event.preventDefault();

    });
  });
