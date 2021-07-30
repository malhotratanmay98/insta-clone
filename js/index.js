var firebaseConfig = {
    apiKey: "AIzaSyDwxz27sGI0pjyH8y2ZV0N5YpFJe_eGjAg",
    authDomain: "banking-website-c7e3a.firebaseapp.com",
    projectId: "banking-website-c7e3a",
    storageBucket: "banking-website-c7e3a.appspot.com",
    messagingSenderId: "487021326870",
    appId: "1:487021326870:web:f5165d7ab9ea7766037b37",
    measurementId: "G-M8KC46R93T"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();

   firebase.auth.Auth.Persistence.LOCAL;

$('#btn-login').click(function(){

    var email=$('#email').val();``
    var password=$('#pw').val();

    //window.alert(email + password);

    if(email!="" && password!=""){
        var result=firebase.auth().signInWithEmailAndPassword(email,password);
      
        result.catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.mesage;

            window.alert("Error "+ errorMessage);
            //window.location.replace("./index.html");
            return;
        });
        //window.alert("login success");
        window.location.replace("./homepage.html");
    }
    else if(email=="" || password==""){
        window.alert("empty not allowed");
    }
    else{
        window.location.replace("./homepage.html");
    }
});

var checkState=false;
var storyState=false;
var likeState=false;
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
    
}
  
      
    //  $('#'+clicked_id).width(100); // Units are assumed to be pixels
    //  $('#'+clicked_id).height(100);
 
function likedPic(like_id){
    if(likeState===false){
        likeState=true;
        $("#"+like_id).css("color","red");
    }
    else{
        likeState=false;
        $("#"+like_id).css("color","black");
    }
}


  

   
    
