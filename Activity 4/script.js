/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Hello INFSCI 2560!");

// You JavaScript here

  document.getElementById("plname").innerHTML =
    localStorage.getItem("Name");
  document.getElementById("plemail").innerHTML =
    localStorage.getItem("Email");
  document.getElementById("pldob").innerHTML = localStorage.getItem("DOB");
  document.getElementById("plphone_number").innerHTML =
    localStorage.getItem("Phone Number");
    document.getElementById("plssn").innerHTML =
    localStorage.getItem("SSN");

function validateForm() {
  var form = document.forms["contact-form"];
  var email = form["email"].value;
  var ssn = form["ssn"].value;
  var phoneNumber = form["phone-number"].value;
  var name = form["name"].value;
  var dob = form["dob"].value;

  if (!email.includes("@")) {
    alert("Incorrect email format");
    form.email.focus();
    return false;
  }
  if (ssn.lenght > 9 || ssn.lenght < 9) {
    alert("Incorrect ssn number");
    form.ssn.focus();
    return false;
  }
  if (phoneNumber.lenght > 10 || phoneNumber.lenght < 10) {
    alert("Incorrect phone number");
    return false;
  }

  localStorage.setItem("Name", name);
  localStorage.setItem("Email", email);
  localStorage.setItem("DOB", dob);
  localStorage.setItem("SSN", ssn);
  localStorage.setItem("Phone Number", phoneNumber);

  document.getElementById("name").innerHTML =
    localStorage.getItem("Name");
  document.getElementById("email").innerHTML =
    localStorage.getItem("Email");
  document.getElementById("dob").innerHTML = localStorage.getItem("DOB");
  document.getElementById("phone_number").innerHTML =
    localStorage.getItem("Phone Number");
    document.getElementById("ssn").innerHTML =
    localStorage.getItem("SSN");

  return true;
}
