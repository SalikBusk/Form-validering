const fName = document.getElementById("firstName"); // Henter DOM-elementet med id "firstName" og gemmer det i variablen fName
const eName = document.getElementById("lastName"); // Henter DOM-elementet med id "lastName" og gemmer det i variablen eName

const submitButton = document.getElementById("submitButton"); // Henter DOM-elementet med id "submitButton" og gemmer det i variablen submitButton

const message = document.getElementById("message"); // Henter DOM-elementet med id "message" og gemmer det i variablen message

//=========== UNDER ===========//

// Lytter efter input-events på fName
fName.addEventListener("input", () => {
  if (fName.value.length < 2) { // Hvis længden af fName's værdi er mindre end 2
    fName.classList.add("error"); // Tilføjer CSS-klassen "error" til fName-elementet
  } else {
    fName.classList.remove("error"); // Fjerner CSS-klassen "error" fra fName-elementet
  }
});

// Lytter efter input-events på eName
eName.addEventListener("input", () => {
  if (eName.value.length < 3) { // Hvis længden af eName's værdi er mindre end 3
    eName.classList.add("error"); // Tilføjer CSS-klassen "error" til eName-elementet
  } else {
    eName.classList.remove("error"); // Fjerner CSS-klassen "error" fra eName-elementet
  }
});

//=========== OVER ===========//

// Lytter efter input-events på fName
fName.addEventListener("input", () => {
  if (fName.value.length > 2) { // Hvis længden af fName's værdi er større end 2
    fName.classList.add("over"); // Tilføjer CSS-klassen "over" til fName-elementet
  } else {
    fName.classList.remove("over"); // Fjerner CSS-klassen "over" fra fName-elementet
  }
});

// Lytter efter input-events på eName
eName.addEventListener("input", () => {
  if (eName.value.length > 3) { // Hvis længden af eName's værdi er større end 3
    eName.classList.add("over"); // Tilføjer CSS-klassen "over" til eName-elementet
  } else {
    eName.classList.remove("over"); // Fjerner CSS-klassen "over" fra eName-elementet
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Forhindrer standardformularen i at blive sendt ved klik på submit-knappen

  const fname = document.getElementById("firstName").value; // Gemmer værdien af DOM-elementet med id "firstName" i variablen fname
  const ename = document.getElementById("lastName").value; // Gemmer værdien af DOM-elementet med id "lastName" i variablen ename
  const email = document.getElementById("email").value; // Gemmer værdien af DOM-elementet med id "email" i variablen email
  const message = document.getElementById("message"); // Gemmer DOM-elementet med id "message" i variablen message

  if (fname === "" || ename === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { // Hvis fname, ename eller email ikke opfylder kravene
    showToast("Udfyld inputfelterne korrekt", message); // Viser en toast-meddelelse med fejlbesked
    message.classList.add("fejl"); // Tilføjer CSS-klassen "fejl" til message-elementet
    if (fname === "") {
      document.getElementById("firstName").classList.add("error"); // Tilføjer CSS-klassen "error" til firstName-elementet
    } else {
      document.getElementById("firstName").classList.remove("error"); // Fjerner CSS-klassen "error" fra firstName-elementet
    }
    if (ename === "") {
      document.getElementById("lastName").classList.add("error"); // Tilføjer CSS-klassen "error" til lastName-elementet
    } else {
      document.getElementById("lastName").classList.remove("error"); // Fjerner CSS-klassen "error" fra lastName-elementet
    }
    if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      document.getElementById("email").classList.add("error"); // Tilføjer CSS-klassen "error" til email-elementet
    }
    else {
      document.getElementById("email").classList.remove("error"); // Fjerner CSS-klassen "error" fra email-elementet
    }
  } else {
    showToast("Success", message); // Viser en toast-meddelelse med succesbesked
    message.classList.add("success"); // Tilføjer CSS-klassen "success" til message-elementet
    fname.classList.add("success"); // Tilføjer CSS-klassen "success" til fname-elementet
    ename.classList.add("success"); // Tilføjer CSS-klassen "success" til ename-elementet
  }
});

function showToast(message, container) {
  const toast = document.createElement("div"); // Opretter et nyt div-element
  toast.classList.add("toast"); // Tilføjer CSS-klassen "toast" til det nye div-element
  toast.innerText = message; // Indstiller tekstindholdet af det nye div-element til meddelelsen
  container.appendChild(toast); // Tilføjer det nye div-element som et barn til container-elementet
  setTimeout(() => {
    toast.classList.add("show"); // Tilføjer CSS-klassen "show" til det nye div-element efter en kort forsinkelse
    setTimeout(() => {
      toast.classList.remove("show"); // Fjerner CSS-klassen "show" fra det nye div-element efter en kort forsinkelse
      setTimeout(() => {
        container.removeChild(toast); // Fjerner det nye div-element fra container-elementet efter en kort forsinkelse
      }, 300);
    }, 3000);
  }, 100);
}
