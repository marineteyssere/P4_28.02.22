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
const nom = document.getElementById('last');
const prenom = document.getElementById('first');
const mail = document.getElementById('email');
const date = document.getElementById('birthdate');


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

//variable appeler html via id
//créer element dom msg d erreur function
//validation avec regex

let validation = document.getElementsByClassName ('text-control')

validation= true
if (validation.innerHTML += 'ok bro'){
}else{  validation.innerHTML += 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
}

if(/^[A-Za-z]{2}$/(prenom)){
  validation=true;
}else{
  validation=false;
}



