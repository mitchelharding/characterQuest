$(document).ready(function(){

  $("#form-group").submit(function(event){

    var formgroups = ["leader", "follower", "smart", "dumb", "strong", "weak", "rebel", "conform", "ambititous", "lazy", "book", "movie"];

    formgroups.map(function(formgroup){
      var userSelect = console.log($("option#" + formgroup).val());
    });

    if (userSelect[0] === "leader" ){
    alert("hey");
    }


    event.preventDefault();
  });
});
