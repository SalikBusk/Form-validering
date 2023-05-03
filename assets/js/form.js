const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");


// under 
firstNameInput.addEventListener("input", () => {
  if (firstNameInput.value.length < 2) {
    firstNameInput.classList.add("error");
  } else {
    firstNameInput.classList.remove("error");
  }
});

lastNameInput.addEventListener("input", () => {
  if (lastNameInput.value.length < 3) {
    lastNameInput.classList.add("error");
  } else {
    lastNameInput.classList.remove("error");
  }
});

// over
firstNameInput.addEventListener("input", () => {
  if (firstNameInput.value.length > 2) {
    firstNameInput.classList.add("over");
  } else {
    firstNameInput.classList.remove("over")
  }
});

lastNameInput.addEventListener("input", () => {
  if (lastNameInput.value.length > 3) {
    lastNameInput.classList.add("over");
  } else {
    lastNameInput.classList.remove("over")
  }
});