import validator from "./validator.js";

//-----------Diferent values---------------//

// let creditCardNumber = '42345678'; //true
let creditCardNumber = "4083952015263"; //false
// let creditCardNumber = '1'; //false

validator.isValid(creditCardNumber);

validator.maskify(creditCardNumber);
