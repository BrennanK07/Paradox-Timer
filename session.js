function CreateNewSession() {
  console.log("Creating New Session");
}

function OpenSessionGenerator() {
  document.getElementById("sessionMenu").style.width = "100%";
  OnMainPage = false;
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function CloseSessionGenerator() {
  document.getElementById("sessionMenu").style.width = "0%";
  OnMainPage = true;
}