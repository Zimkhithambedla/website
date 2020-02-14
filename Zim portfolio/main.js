// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBGK8wpUDYw3k_4GbiNr0sM6j7ILKeAdYw",
    authDomain: "contact-form-592ad.firebaseapp.com",
    databaseURL: "https://contact-form-592ad.firebaseio.com",
    projectId: "contact-form-592ad",
    storageBucket: "contact-form-592ad.appspot.com",
    messagingSenderId: "127279497180",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname= getInputVal('lname')
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, lname, email, phone, message);

  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname,lname, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      message: message,
    });
  }
  