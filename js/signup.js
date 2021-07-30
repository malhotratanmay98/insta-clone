
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


function signup(){
   

    var email=$('#email').val();
    var password=$('#pw').val();

firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error occured"+ errorMessage);
});


  };