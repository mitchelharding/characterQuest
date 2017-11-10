$(document).ready(function(){
  $("form#form-group").submit(function(){

    var a1 = parseString($("#leader").val());
    var a2 = parseString($("#follower").val());
    var b1 = parseString($("#smart").val());
    var b2 = parseString($("#dumb").val());
    var c1 = parseString($("#strong").val());
    var c2 = parseString($("#weak").val());
    var d1 = parseString($("#rebel").val());
    var d2 = parseString($("#conform").val());
    var e1 = parseString($("#amb").val());
    var e2 = parseString($("#lazy").val());
    var f1 = parseString($("#book").val());
    var f2 = parseString($("#movie").val());

    var dwights = a1 === "Leader" || b1 === "Leader" || c1 === "Strong Willed"|| d2 === "Confirmist" || e1 === "Ambitous" || f2 === "Movie";



    if (dwights) {
      $("#result").text("Dwight Shrute");
      $(".result").show();
      $("#dwights").show();
    } else if (jimh) {
      $("#result").text("Jim Helbert");
      $(".result").show();
      $("#jimh").show();
    } else if (pamh) {
      $("#result").text("Pam Helbert");
      $(".result").show();
      $("#pamh").show();
    }

    event.preventDefault();

  });
});
