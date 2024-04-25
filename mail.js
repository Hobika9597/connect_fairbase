const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBdaEsB0ZhSJbAA8jk8eBks725Zu-3Av1s",
    authDomain: "contactfrom-5b2d2.firebaseapp.com",
    databaseURL: "https://contactfrom-5b2d2-default-rtdb.firebaseio.com",
    projectId: "contactfrom-5b2d2",
    storageBucket: "contactfrom-5b2d2.appspot.com",
    messagingSenderId: "1087137032656",
    appId: "1:1087137032656:web:77de3d2aaa4465fe69f1d5"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  console.log(name,emailid,msgContent);n 

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
