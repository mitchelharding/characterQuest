$(document).ready(function(){
  $("form.form-group").submit(function(){

    var dwight = $("select#leaderQ").val("leader") + $("select#intelQ").val("smart") + $("select#willQ").val("strong") + $("select#ballsQ").val("conform") + $("select#ambitionQ").val("ambitious") + $("select#bookormovieQ").val("movie");

    if("select#leaderQ" === "leader") + ("selectintelQ" === "smart") + ("select#willQ" === "strong") + ("select#ballsQ" === "conform") + ("select#ambitionQ" === "ambitious") + ("select#bookormovieQ" === "movie"){
      $("#result").text(Dwight Shrute);
      $("#results").show();
      $("img#dwights").show();
    }

      prevent.preventDefault();

  });
});
