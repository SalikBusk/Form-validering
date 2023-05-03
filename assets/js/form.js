const fName = document.getElementById("firstName");
const eName = document.getElementById("lastName");

const submitButton = document.getElementById("submitButton");

const message = document.getElementById("message");



//=========== UNDER ===========//

// fName under 2 => error (red) => assets/css/form.css => linje 62
fName.addEventListener("input", () => {
  if (fName.value.length < 2) {
    fName.classList.add("error");
  } else {
    fName.classList.remove("error");
  }
});

// eName under 3 => error (red) => assets/css/form.css => linje 62
eName.addEventListener("input", () => {
  if (eName.value.length < 3) {
    eName.classList.add("error");
  } else {
    eName.classList.remove("error");
  }
});

//=========== OVER ===========//

// fName over 2 => (green) => assets/css/form.css => linje 66
fName.addEventListener("input", () => {
  if (fName.value.length > 2) {
    fName.classList.add("over");
  } else {
    fName.classList.remove("over")
  }
});

// eName over 3 => (green) => assets/css/form.css => linje 66
eName.addEventListener("input", () => {
  if (eName.value.length > 3) {
    eName.classList.add("over");
  } else {
    eName.classList.remove("over")
  }
});


//=========== submitButton ===========//
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const fname = document.getElementById("firstName").value;
  const ename = document.getElementById("lastName").value;
  const message = document.getElementById("message");

  if (fname === "" || ename === "") {
    showToast("Udfylde Inputfelterne korrekt", message);
    message.classList.add("fejl");
    fname.classList.add("fejl");
    ename.classList.add("fejl");
  } else {
    showToast("Success", message);
    message.classList.add("success");
    fname.classList.add("success");
    ename.classList.add("success");
  }
});

function showToast(message, container) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        container.removeChild(toast);
      }, 300);
    }, 3000);
  }, 100);
}

