/* eslint-disable no-console */
import validator from "./validator.js";
//Variables
let creditCardNumber;
let innerHtml = "";
//Div
let divContenido = document.querySelector(".contenido");
let divNumberValidate = document.createElement("div");

//EventListener btn Validate
document.querySelector("#btn-modal").addEventListener("click", (evt) => {
  console.log(evt);
  //Credit Card Number
  creditCardNumber = validator.isNumber(document.querySelector("#number").value);

  //Add results in Contenido
  innerHtml = "";
  if (creditCardNumber != "") {
    let pMaskify = `<p><b>Credit Card Number:</b> ${validator.maskify(
      creditCardNumber
    )} </p>`;
    let pIsValid = `<p><b>Validation result:</b> ${
      validator.isValid(creditCardNumber) ? "Valid Card !!!! " : "Invalid Card"
    }</p>`;
    divNumberValidate.innerHTML = innerHtml + pMaskify + pIsValid;
  } else {
    let mesage = `<b><p>You must enter a valid number</b></p>`
    divNumberValidate.innerHTML = innerHtml + mesage;
  }
  divContenido.appendChild(divNumberValidate);
});

//EventListener btn Close
document.querySelector("#close").addEventListener("click", (evt) => {
  console.log(evt);
  //Clean
  document.querySelector("#number").value = "";
  if (divNumberValidate.firstChild) {
    divNumberValidate.removeChild(divNumberValidate.firstChild);
  }
});
