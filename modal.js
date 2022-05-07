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

// ------------------------------------------FORMULAIRE--------------------------------------------//

// Conditions regex 

const patterns = {
  first: /^[a-zA-Z é è à -]{2,30}$/i,
  last: /^[a-zA-Z é è à -]{2,30}$/i,
  email: /^([a-z\d\./_-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,5})?$/,
  birthdate: /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/i,
  challenge: /^[0-9]{1,3}$/,
};


//Validation "C'est parti"

const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");

let First = 0;
let Last = 0;
let Email = 0;
let Birthdate = 0;
let Challenge = 0;
let City = 0;
let Conditions = 0;

// Test des champs 

function testFirst() {
  const prenom = document.getElementById('first').value;
  const p = document.getElementById('premier');  

    if (patterns.first.test(prenom)) {
      p.className = 'valid';
      return First = 1;
    } else {
      p.className = 'invalid';  
      return First = 0;   
    } 
  }

  function testLast() {
    const nom = document.getElementById('last').value;
    const p = document.getElementById('deuxieme');

    if (patterns.last.test(nom)) {
      p.className = 'valid';
      return Last = 1; 
    } else {
      p.className = 'invalid';
      return Last = 0;
    } 
  }
  
  function testEmail() {
    const mail = document.getElementById('email').value;
    const p = document.getElementById('troisieme');
    const i = 0;

    if (patterns.email.test(mail)) {
      p.className = 'valid';
      return Email = 1;  
    } else {
      p.className = 'invalid';
      return Email = 0; 
    } 
  }

  function testDate() {
    const date = document.getElementById('birthdate').value;
    const p = document.getElementById('quatrieme');
    const i = 0;

    if (patterns.birthdate.test(date)) {
      p.className = 'valid';
      return Birthdate = 1;  
    } else if (date == '') {
      p.className = 'invalid';
      return Birthdate = 0;   
    } 
  }

  function testParticipate() {
    const participate = document.getElementById('quantity').value;
    const p = document.getElementById('cinquieme');
    const i = 0;

    if (patterns.challenge.test(participate)) {
      p.className = 'valid';
      return Challenge = 1; 
    } else if (participate == '') {
      p.className = 'invalid';
      return Challenge = 0;    
    } 
  }

  function testCity() {
    const cityChecked = document.querySelector('input[name=location]:checked');
    const p = document.getElementById('sixieme');

    if (cityChecked != null) {
      p.className = 'valid';
      return City = 1;
    } else {
      p.className = 'invalid';
      return City = 0;
    } 
  }

  function testCondition() {
    const conditionChecked = document.getElementById('checkbox1').checked;
    const p = document.getElementById('septieme');

    if (conditionChecked == false) {
      p.className = 'invalid';
      return Conditions = 0; 
    } else {
      p.className = 'valid';
      return Conditions = 1;
    } 
  }

// Validation du formulaire + modal Merci
function validation() {

  let sum = 0;

  testFirst();
  testLast();
  testEmail();
  testDate();
  testParticipate();
  testCity();
  testCondition();

  sum = First + Last + Email + Birthdate + Challenge + City + Conditions;
  
  if (sum > 6) {
    modalBody.removeChild(form);
    modalBody.innerHTML = `<div class="innerContent">Merci pour <br> votre inscription</div><div class="button buttonStyle" onclick="closeModal();">Fermer</div>`;
    return true;
  } else if (sum <= 6){
    console.log(sum)
    return false;
  }

}