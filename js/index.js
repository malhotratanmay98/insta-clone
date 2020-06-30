var checkState=false;
var storyState=false;
function opencam(){
    
}

function darkmode(){
    if(checkState===false){
        checkState=true;

     $("body").css("background-color","black");
    $(".navbar-bottom").css("background-color","black");
    $(".footer-icons").css("color","white");
    $(".like-comment").css("color","white");
    $(".logo").css("color","white");
    $(".switch").css("color","white");
    $("h5,h4").css("color","white");

    }
    else{
        checkState=false;
        location.reload();
    }


    
}



 function showstory(clicked_id){
   
   if(storyState===false){      
       storyState=true;
       $("#"+clicked_id).animate({height: "300px",width:"100%"},"slow");       // 300px
       $('#'+clicked_id).css("border-radius","0%");
   }

   else{
       storyState=false;
    $("#"+clicked_id).animate({height: "80px",width:"80px"});
    $('#'+clicked_id).css("border-radius","100%");
   }
    
    
    
   
    
   
      
    //  $('#'+clicked_id).width(100); // Units are assumed to be pixels
    //  $('#'+clicked_id).height(100);
 }



  

   
    
