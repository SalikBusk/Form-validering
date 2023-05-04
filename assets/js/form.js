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


submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const fname = document.getElementById("firstName").value;
  const ename = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (fname === "" || ename === "") {
    showToast("Udfylde Inputfelterne korrekt", message);
    message.classList.add("fejl");
    if (fname === "") {
      document.getElementById("firstName").classList.add("error");
    } else {
      document.getElementById("firstName").classList.remove("error");
    }
    if (ename === "") {
      document.getElementById("lastName").classList.add("error");
    } else {
      document.getElementById("lastName").classList.remove("error");
    }
    if (email === "") {
      document.getElementById("email").classList.add("error");
    }
    else {
      document.getElementById("email").classList.remove("error");
    }
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

