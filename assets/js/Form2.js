let fName = false;
let eName = false;

document.getElementById("firstName").addEventListener("keyup", validateFirstName);
document.getElementById("lastName").addEventListener("keyup", validateLastName);



function validateFirstName() {
  let firstNameInput = document.getElementById("firstName");
  let firstNameValue = firstNameInput.value;
  let firstNameLength = firstNameValue.length;
  let firstNameMinLength = 2;
  let firstNameMaxLength = 20;

  if (
    firstNameLength < firstNameMinLength ||
    firstNameLength > firstNameMaxLength
  ) {
    firstNameInput.style.borderColor = "red";
    fName = false;
  } else {
    firstNameInput.style.borderColor = "green";
    fName = true;
  }
}

function validateLastName() {
  let lastNameInput = document.getElementById("lastName");
  let lastNameValue = lastNameInput.value;
  let lastNameLength = lastNameValue.length;
  let lastNameMinLength = 3;
  let lastNameMaxLength = 20;

  if (
    lastNameLength < lastNameMinLength ||
    lastNameLength > lastNameMaxLength
  ) {
    lastNameInput.style.borderColor = "red";
    eName = false;
  } else {
    lastNameInput.style.borderColor = "green";
    eName = true;
  }
}

document.getElementById("myForm").addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  let emailInput = document.getElementById("email");
  let lastNameInput = document.getElementById("lastName");
  let emailValue = emailInput.value;
  let emailRegExp = /^\S+@\S+\.\S+$/;

  if (!fName || !eName) {
    alert("udfylde Inputfelterne korrekt!!!!!!!!!!!!");
    return false;
  }

  if (!emailRegExp.test(emailValue)) {
    alert("udfylde email address!!!!!!!!!!!!");
    return false;
  }

  alert("Form submitted successfully!");
}
