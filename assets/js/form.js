const fName = document.getElementById("firstName");
const eName = document.getElementById("lastName");



//=========== UNDER ===========//

// fName under 2 => error (red)
fName.addEventListener("input", () => {
  if (fName.value.length < 2) {
    fName.classList.add("error");
  } else {
    fName.classList.remove("error");
  }
});

// eName under 3 => error (red)
eName.addEventListener("input", () => {
  if (eName.value.length < 3) {
    eName.classList.add("error");
  } else {
    eName.classList.remove("error");
  }
});

//=========== OVER ===========//

// fName over 2 => (green)
fName.addEventListener("input", () => {
  if (fName.value.length > 2) {
    fName.classList.add("over");
  } else {
    fName.classList.remove("over")
  }
});

// eName over 3 => (green)
eName.addEventListener("input", () => {
  if (eName.value.length > 3) {
    eName.classList.add("over");
  } else {
    eName.classList.remove("over")
  }
});