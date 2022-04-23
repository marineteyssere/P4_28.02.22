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
  formData[data-error-visible]="true" 
  if (first = length >= 2){
      return vrai ;
  }else{
     return formData[data-error-visible] +='Veuillez entrer 2 caractères ou plus pour le champ du prénom'; 
  }
  
}

