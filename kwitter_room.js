var firebaseConfig = {
  apiKey: "AIzaSyAxGwi0a0g4KneUNDHey9fOTaGPPgiE-qU",
  authDomain: "kwitter-6651e.firebaseapp.com",
  databaseURL: "https://kwitter-6651e-default-rtdb.firebaseio.com",
  projectId: "kwitter-6651e",
  storageBucket: "kwitter-6651e.appspot.com",
  messagingSenderId: "1060520274031",
  appId: "1:1060520274031:web:c1c7ac8972608b5ba1059a",
  measurementId: "G-0N0LQLXV63"
}
    
    
  firebase.initializeApp(firebaseConfig);
       
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() { 
       firebase.database().ref("/").on('value',
        function(snapshot) { 
          document.getElementById("output").innerHTML = ""; 
          snapshot.forEach(function(childSnapshot) { 
           childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }