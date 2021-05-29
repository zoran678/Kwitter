
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDpMukthAfHlRV8vrUEh6sMf7q73Q4SrCA",
    authDomain: "kwitter-homework-debb1.firebaseapp.com",
    databaseURL: "https://kwitter-homework-debb1-default-rtdb.firebaseio.com",
    projectId: "kwitter-homework-debb1",
    storageBucket: "kwitter-homework-debb1.appspot.com",
    messagingSenderId: "477353578411",
    appId: "1:477353578411:web:f7ce365029d0bf780e0cee",
    measurementId: "G-S0JS9NK21E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name") ;
    room_name = localStorage.getItem("room_name") ;

    function send() {

      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push( { 
          name:user_name,
          message:msg,
          likes:0  
      })
      document.getElementById("msg").value = "" ;
    }


function getData() {
      
firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
childData = childSnapshot.val(); 
if(childKey != "purpose") {firebase_message_id = childKey;
message_data = childData;
//Start code



//End code
      } });  }); }
getData();

