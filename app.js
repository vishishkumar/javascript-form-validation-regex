let name = document.getElementById("name");
let reName = /^[a-zA-Z]{2,}$/i;
document.getElementById("name").addEventListener("blur", validateName);
function validateName() {
  validOrNot(name, reName);
}

let mobile = document.getElementById("mobile");
let reMobile = /^\+?\d{10,12}$/;
document.getElementById("mobile").addEventListener("blur", validateMobile);
function validateMobile() {
  validOrNot(mobile, reMobile);
}

let email = document.getElementById("email");
let reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
document.getElementById("email").addEventListener("blur", validateEmail);

function validateEmail() {
  validOrNot(email, reEmail);
}

function validOrNot(string, regEx) {
  !regEx.test(string.value)
    ? string.classList.add("is-invalid")
    : string.classList.remove("is-invalid");
  regEx.test(string.value)
    ? string.classList.add("is-valid")
    : string.classList.remove("is-valid");
}
