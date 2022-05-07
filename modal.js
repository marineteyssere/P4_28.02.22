//PARTIE DEJA PRESENTE //

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebtn = document.querySelectorAll(".close"); //CROIX FERMER



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closebtn.forEach((btn) => btn.addEventListener("click", closeModal)); // CROIX FERMER

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none"; //CROIX FERMER
}

// FIN PARTIE DEJA PRESENTE //

//--------------------------------MA PARTIE--------------------------------------------------------//

const first = document.getElementById("first");
const firstError = document.getElementById("firstError");

const last = document.getElementById("last");
const lastError = document.getElementById("lastError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate"); 
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");

const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");




//--------------------------------------------------------------------------------------------------------------//

// Suppression des messages d'erreur

function textControl () {document.getElementById("text-control")};

textControl(firstError, lastError, emailError, birthdateError, quantityError, locationError, conditionsError);

console.log(textControl)


  // Fonction créant des messages d'erreur

function textControl (elementErrorId, name) {

elementErrorId.insertAdjacentHTML(

  "afterend",

  "<span id='" + name + "-error' class='formData'></span>"

);

}



// Fonction permettant de cacher les messages d'erreurs des champs

function textControl(errorName) {

errorName.style.display = "none";

}



// Erreur du champ Prénom

//createErrorMessage(firstError, "firstError");

//hideError(firstError);



// Validation des noms par expression régulière

function nameRegexValidation(first) {

const re = /[a-zA-Z]/;

return re.test(String(first));

}



// Fonction permettant de valider le prénom

function firstValidation() {

// Si la valeur du champ est moins longue que deux caractères, on renvoie une erreur

if (first.value.length < 2) {

  firstError.textContent = "Merci d'entrer au minimum deux caractères"; // Message d'erreur affiché

  firstError.style.display = "block"; // On affiche le bloc d'erreur

  return false;

} else {

  // Sinon, si la valeur du champ contient des chiffres ou caractères spéciaux, on renvoie une erreur

  if (nameRegexValidation(first.value) == false) {

    firstError.textContent = "Pas de chiffres ou de caractères spéciaux"; // Message d'erreur affiché

    firstError.style.display = "block"; // On affiche le bloc d'erreur

    return false;

    // Sinon on valide le champ et on renvoie "true"

  } else {

    firstError.style.display = "none"; // On cache le bloc d'erreur s'il n'y en a pas

    return true;

  }

}

}