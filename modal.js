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

//Formulaire 


function validateFirstName() {

  let vrai = 'firstNameValid'
  let faux = formData[data-error-visible]="true" ='Veuillez entrer 2 caractères ou plus pour le champ du prénom'

  if (first = length >= 2){
      return vrai ;
  }else{
     return faux ; 
  }
  
}

function validateLasteName() {

  let vrai = 'lastNameValid'
  let faux = 'Veuillez entrer 2 caractères ou plus pour le champ du nom'

  if (last = length >= 2){
      return vrai ;
  }else{
     return faux;
     [data-error-visible="true"]
  }
  
}

function validateEmail() {

  let vrai = 'emailValid'
  let faux = 'Veuillez entrer une addresse mail valide.'

  if (email = (/[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(form["email"].value)) {
      return vrai ;
  }else{
     return faux
  }


}
function validatebirthdate() {

  let vrai = 'birthdateValid'
  let faux = 'Veuillez entrer une date de naissance.'

  if (birthdate = form["birthdate"]){
      return vrai ;
  }else{
     return faux
  }
  
}

function validateTournament() {

  let vrai = 'tournamentValid'
  let faux = 'Veuillez entrer une valeur numérique.'

  if (form["quantity"].value){
      return vrai ;
  }else{
     return faux
  }
  
}

function validatelocation() {

  let vrai = 'locationValid'
  let faux = 'Veuillez sélectionner une ville.'

  if (form.location.value){
      return vrai ;
  }else{
     return faux
  }
  


}
function validateterms() {

  let vrai = 'termsValid'
  let faux = 'Veuillez indiquer que vous acceptez les conditions générales.'

  if (form.terms.checked){
      return vrai ;
  }else{
     return faux
  }


}

