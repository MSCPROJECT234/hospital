function sendWhatsApp() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;


    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    var message = `Hello,%20I%20would%20like%20to%20share%20my%20details%20with%20you:%0A
    %20First%20Name:%20${encodeURIComponent(firstName)}%0A
    %20Last%20Name:%20${encodeURIComponent(lastName)}%0A
    %20Email:%20${encodeURIComponent(email)}%0A
    %20Phone:%20${encodeURIComponent(phone)}%0A
    %20Address:%20${encodeURIComponent(address)}`;


    var phoneNumber = "916383151973";
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    var firstName = document.getElementById("fname").value='';
    var lastName = document.getElementById("lname").value='';
    var email = document.getElementById("email").value='';
    var phone = document.getElementById("phone").value='';
    var address = document.getElementById("address").value='';
}


function signupin(){
    window.location.href=window.location.origin + '/assets/view/card.html';
}



var signInBtn = document.getElementById("signIn");
var signUpBtn = document.getElementById("signUp");
var fistForm = document.getElementById("form1");
var secondForm = document.getElementById("form2");
var container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());


var registeredPhone = "";
var registeredPassword = "";

function registerUser() {
    var name = document.getElementById("name").value.trim();
	var phone = document.getElementById("reg-phone").value.trim();
	var password = document.getElementById("reg-password").value.trim();


  if (!name || !phone || !password) {
	alert("Please fill in all fields.");
	return;
  }

  registeredPhone = phone;
  registeredPassword = password;

  alert("Registered Successfully!");
  
  var name = document.getElementById("name").value='';
  var phone = document.getElementById("reg-phone").value='';
  var password = document.getElementById("reg-password").value='';

  document.getElementById("register-section").style.display = "none";
  document.getElementById("login-section").style.display = "block";
}


function loginUser() {
	var phone = document.getElementById("login-phone").value.trim();
	var password = document.getElementById("login-password").value.trim();

  if (!phone || !password) {
	alert("Please fill in all fields.");
	return;
  }

  if (phone === registeredPhone && password === registeredPassword) {
	alert("Login Successfully! Book An Appointment");
  } else {
	alert("Invalid Phone Number or Password. Please try again.");
  }
  var phone = document.getElementById("login-phone").value='';
  var password = document.getElementById("login-password").value='';
}