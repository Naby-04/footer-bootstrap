let code = document.getElementById("code");
let button = document.getElementById("buttonAfiche");
function afficherCode() {
  if (code && button) {
    console.log();
    if (code.style.display === "none") {
      code.style.display = "block";
      button.textContent = "FERMER LE CODE";
    } else if (code.style.display === "block") {
      console.log(button);
      code.style.display = "none";
      button.textContent = "AFFICHER LE CODE";
    }
  }
}
