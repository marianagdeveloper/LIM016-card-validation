import validator from "./validator.js";

//-----------Diferent values---------------//
// let creditCardNumber = '42345678'; //true
let creditCardNumber = "4083952015263"; //false
// let creditCardNumber = '1'; //false

//Variables
let cardNumber = "";

//Div
// let divCard = document.querySelector(".card");

//Forms
let formButtonValidate = document.querySelector("#buttonvalidate");
// let formNumberCard = document.querySelector("#numbercard")

//Validator Boilerplace
// validator.isValid(creditCardNumber);
// validator.maskify(creditCardNumber);

//Main
validateCard();

function validateCard() {
  //Button Validate Card
  let divbuttonValidate = document.createElement("div");
  let innerHtml = "";
  let button = `<input type=button id="starting" value="Validate Number Card">`;
  divbuttonValidate.innerHTML = innerHtml + button;
  formButtonValidate.appendChild(divbuttonValidate);

  //EventListener divCar(display none)
  document.querySelector("#starting").addEventListener('click', evt =>{
    // divCard.classList.add("habilitado");
    // showFormNumber();
    cardNumber = document.querySelector("#number").value;
    // alert(cardNumber);

    creditCardNumber = cardNumber;

    // validator.isValid(creditCardNumber);
    alert(validator.isValid(creditCardNumber) ? 'valid card number' : 'invalid card number');
    // validator.maskify(creditCardNumber);
    alert(validator.maskify(creditCardNumber));

  })
}

// function showFormNumber() {
//   //Form Validate Card
//   // let divFormValidate = document.createElement("div");
//   // let h2 = document.createElement("h2");
//   // h2.innerHTML= `Validate Number Target`;
//   // divFormValidate.appendChild(h2);
//   // let innerHtml = "";
//   // let form = `<fieldset type=button id="starting" value="Validate New Card">`;
//   // divFormValidate.innerHTML = innerHtml + form;

// }


