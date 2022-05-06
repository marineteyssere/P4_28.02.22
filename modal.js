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


let formKo = document.getElementsByClassName("form-data"); 
formKo.style.color = "red";
formKo.style.fontSize = "10px";
formKo.style.borderColor = "red";
formKo.style.borderWidth = "2px";

function checkInputs(){
  
  // if first.value is empty and doesn't respect regex name, or first.length is less than 2 characters
  // then error message is displayed
  let verifName = /^[a-zA-Z é è à -]{2,}$/;
  if(verifName.exec(first.value) === null || first.length < 2) {
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    return formKo;
  } else {
    firstError.style.display = "none";
    first.style.color = "green";
    first.style.fontSize = "10px";
    first.style.borderColor = "green";
    first.style.borderWidth = "2px";

  }

  let verifLast = /^[a-zA-Z é è à -]{2,}$/;
  if(verifLast.exec(last.value) === null || last.length < 2) {
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    return formKo;
  }  else {
    lastError.style.display = "none";
    last.style.color = "green";
    last.style.fontSize = "10px";
    last.style.borderColor = "green";
    last.style.borderWidth = "2px";
  }

  // if email doesn't correspond to regex => error
  let verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(verifEmail.exec(email.value) === null) {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    return formKo;
  } else {
    emailError.style.display = "none";
    email.style.color = "green";
    email.style.fontSize = "10px";
    email.style.borderColor = "green";
    email.style.borderWidth = "2px";
  }

  if(!birthdate.value) {
    birthdateError.textContent =  "Veuillez entrer votre date de naissance";
    return formKo;
  } else {
    birthdateError.style.display = "none";
    birthdate.style.color = "green";
    birthdate.style.fontSize = "10px";
    birthdate.style.borderColor = "green";
    birthdate.style.borderWidth = "2px";
  }

  //if quantity.value is empty or its value is not a number => error//
  if(quantity.value === "" || isNaN(quantity.value)) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    return formKo;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }

 // if one of the option is not checked => error//
  if(!(location2[0].checked || location2[1].checked || location2[2].checked || location2[3].checked || location2[4].checked || location2[5].checked)) {
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return formKo === false;
  } else {
    locationError.style.display = "none";
    location2.style = "default";
  }

  if(!conditions.checked) { 
    conditionsError.textContent = "Veuillez vérifier que vous avez accepté les termes et conditions";
    return formKo;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
  return formKo = true;


}

//--------------------------------------------------------------------------------------------------------------//

