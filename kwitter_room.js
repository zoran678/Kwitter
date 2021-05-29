
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function getData()

{ firebase.database().ref("/").on('value', function(snapshot) { 
  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { 
      childKey = childSnapshot.key ;
      Room_names = ChildKey ;

console.log("Room_names -" ,Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row ;
  });
});}

getData() ;

function redirectToRoomName(name)

{

  console.log(name) ;
  localStorage.setItem("room_name" , name) ;
   
   window.location="kwitter_page.html";
   
}

function logout() {
localStorage.removeItem("user_name") ;
localStorage.removeItem("room_name") ;
 window.location = "index.html" ;
}
