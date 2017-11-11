$(document).ready(function(){

  $( "select" )
  .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".result" ).text( str );
    $("#result").show();
    })
    .trigger( "change" );

  });
