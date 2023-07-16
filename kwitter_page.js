//YOUR FIREBASE LINKS
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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
     }
