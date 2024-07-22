let userName = document.getElementById("username");
let formBtn = document.getElementById("submitBtn");
let formSubmit = document.querySelector("form");
let errorTag = document.querySelector("small");
let password = document.getElementById("password");
let number = document.getElementById("number");
let email = document.getElementById("email");
let ConfirmPassword = document.getElementById("Confirm_password");
// console.log(password.parentElement);
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

function validate() {
  let userValue = userName.value.trim();
  let passwordValue = password.value.trim();
  //Validating username
  if (userValue === "") {
    // alert("empty name");
    setErrorMsg(userName, "Username Can't be Empty!");
  } else if (userValue.length < 3) {
    setErrorMsg("must be four or more character!");
  } else {
    setSuccessMsg(userName, "Name Is Valid");
  }
  //validating number
  if (number.value === "") {
    // alert("number is empty");
    setErrorMsg(number, "Number Can't be Empty!");
  } else if (number.value.length < 10 || number.value.length > 10) {
    // alert("number is less than 10");
    setErrorMsg(number, "must be ten digit!");
  } else {
    setSuccessMsg(number, "Number is valid");
  }

  //validating password
  if (passwordValue === "") {
    // alert("password is empty");
    setErrorMsg(password, "Password Can't be Empty!");
  } else if (passwordValue.length < 8) {
    // alert("password is less than 8");
    setErrorMsg(password, "must be eight or more character!");
  } else if (!/[A-Z]/.test(passwordValue)) {
    // alert("password must contain at least one uppercase letter");
    setErrorMsg(password, "must contain at least one uppercase letter!");
  } else if (!/[a-z]/.test(passwordValue)) {
    // alert("password must contain at least one lowercase letter");
    setErrorMsg(password, "must contain at least one lowercase letter!");
  } else if (!/[0-9]/.test(passwordValue)) {
    // alert("password must contain at least one number");
  } else {
    setSuccessMsg(password, "Password is valid!");
  }
  //validating email
  let emailValue = email.value.trim();
  if (emailValue === "") {
    // alert("email is empty");
    setErrorMsg(email, "Email Can't be Empty!");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    // alert("Invalid email format");
    setErrorMsg(email, "Invalid email format!");
  } else {
    setSuccessMsg(email, "Email is valid!");
  }
  //validating confirm password
  let confirmPasswordValue = ConfirmPassword.value.trim();
  if (confirmPasswordValue === "") {
    // alert("confirm password is empty");
    setErrorMsg(ConfirmPassword, "Confirm Password Can't be Empty!");
  } else if (passwordValue !== confirmPasswordValue) {
    // alert("password and confirm password are not matching");
    setErrorMsg(ConfirmPassword, "Password are not matching!");
  } else {
    setSuccessMsg(ConfirmPassword, "Confirm Password is valid!");
  }
}
function setErrorMsg(currentTag, msg) {
  let tag = currentTag.parentElement;
  const small = tag.querySelector("small");
  small.innerHTML = msg;
  small.style.color = "red";
  small.style.visibility = "visible";
  currentTag.style.border = "2px solid red";
  currentTag.style.backgroundImage = `url(assets/gpp_maybe_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg)`;
}
function setSuccessMsg(currentTag, msg) {
  let tag = currentTag.parentElement;
  const small = tag.querySelector("small");
  small.innerHTML = msg;
  small.style.visibility = "visible";
  // small.style.display = "block";
  small.style.color = "green";
  currentTag.style.border = "2px solid green";
  currentTag.style.backgroundImage = `url(assets/verified_user_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg)`;
}
