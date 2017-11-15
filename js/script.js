$(document).ready(function(){
    $("form#form-group").submit(function(event){
      event.preventDefault();

       var userInput = [];

        $("input:checkbox[name=characterQ]:checked").each(function(){
          var result = $(this).val();
          userInput.push(result);
        });

           if (userInput = "leader", "smart"){
             $("#result").show();
             $(".result").text("Dwight Shrute");
             $("img#dwights").show();
            }


         $("form#form-group").hide();
    });
  });
