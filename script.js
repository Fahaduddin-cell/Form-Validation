const handler = (event) => {
  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();
  let password = document.getElementById("password").value.trim();
  let cPass = document.getElementById("cPass").value.trim();
  let email = document.getElementById("email").value.trim();
  event.preventDefault();
  let isNamevalid = false;
  let isEmailvalid = false;
  let isNumbervalid = false;
  let isPasswordvalid = false;
  let isCPasswordvalid = false;

  let mailCheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailCheck.test(email)) {
    document.getElementById("emailErr").innerHTML = "";
    isEmailvalid = false;
    document.getElementById("email").style.borderColor = "green";
  } else {
    document.getElementById("emailErr").innerHTML = "invalid Email";
    document.getElementById("email").style.borderColor = "red";
    isEmailvalid = true;
  }

  let nameCheck = /^[A-Za-z. ]{3,30}$/;
  if (nameCheck.test(name)) {
    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("name").style.borderColor = "green";
    isNamevalid = false;
  } else {
    document.getElementById("nameErr").innerHTML = "invalid Name";
    document.getElementById("name").style.borderColor = "red";
    isNamevalid = true;
  }

  let numbCheck = /^\d{10}$/;
  if (numbCheck.test(number)) {
    document.getElementById("numberErr").innerHTML = "";
    document.getElementById("number").style.borderColor = "green";
    isNumbervalid = false;
  } else {
    document.getElementById("numberErr").innerHTML = "invalid number";
    document.getElementById("number").style.borderColor = "red";
    isNumbervalid = true;
  }

  let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (passCheck.test(password)) {
    document.getElementById("passwordErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "green";
    isPasswordvalid = false;
  } else {
    document.getElementById("passwordErr").innerHTML = "invalid password";
    document.getElementById("password").style.borderColor = "red";
    isPasswordvalid = true;
  }

  if (cPass !== "" && password === cPass) {
    document.getElementById("cPassErr").innerHTML = "";
    document.getElementById("cPass").style.borderColor = "green";
    isCPasswordvalid = false;
  } else {
    document.getElementById("cPassErr").innerHTML = "Password does not match";
    document.getElementById("cPass").style.borderColor = "red";
    isCPasswordvalid = true;
  }

  if (
    !isNamevalid &&
    !isEmailvalid &&
    !isNumbervalid &&
    !isPasswordvalid &&
    !isCPasswordvalid
  ) {
    alert("Submitted");

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cPass").value = "";
    document.getElementById("email").value = "";

    document.getElementById("name").style.borderColor = "rgb(206,212,218)";
    document.getElementById("number").style.borderColor = "rgb(206,212,218)";
    document.getElementById("password").style.borderColor = "rgb(206,212,218)";
    document.getElementById("cPass").style.borderColor = "rgb(206,212,218)";
    document.getElementById("email").style.borderColor = "rgb(206,212,218)";
  }
};
