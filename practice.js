
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDBGZUYHw-jYXvxA_KFlJUPRpSvOrD8dxM",
    authDomain: "kwitter-2eec9.firebaseapp.com",
    databaseURL: "https://kwitter-2eec9-default-rtdb.firebaseio.com",
    projectId: "kwitter-2eec9",
    storageBucket: "kwitter-2eec9.appspot.com",
    messagingSenderId: "1019736908418",
    appId: "1:1019736908418:web:910a1c1100c05f85228a9b"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }