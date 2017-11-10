$(document).ready(function(){
  $("form#form-group").submit(function(){

    var a1 = $("#leader").val();
    var a2 = $("#follower").val();
    var b1 = $("#smart").val();
    var b2 = $("#dumb").val();
    var c1 = $("#strong").val();
    var c2 = $("#weak").val();
    var d1 = $("#rebel").val();
    var d2 = $("#conform").val();
    var e1 = $("#amb").val();
    var e2 = $("#lazy").val();
    var f1 = $("#book").val();
    var f2 = $("#movie").val();

    var dwights = a1 + b1 + c1 + d2 + e1 + f2;
    var jimh = a1 + b1 + c1 + d1 + e2 + f2;
    var pamh = a2 + b2 + c1 + d2 + e2 + f1;


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
