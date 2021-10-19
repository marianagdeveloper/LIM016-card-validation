/* eslint-disable no-console */
const validator = {

  isValid(number) {
    console.log(number);
    let arrayInverse = [];
    let arrayEvenOdd = [];
    let arrayTotal = [];
    let sNumber = number.toString();
    let numberTemporary;
    let numberTemporaryAdd = 0;
    let numberTemporaryInt = 0;

    //Array Reverse
    arrayInverse = sNumber.split("").reverse();
    // console.log(arrayInverse);

    //Number in Even Position: 2,4,6,8...
    for (let index = 0; index < arrayInverse.length; index++) {
      if (index % 2 != 0) {
        const evenPosition = arrayInverse[index] * 2;
        arrayEvenOdd[index] = evenPosition;
      } else {
        //Number in Odd Position: 3,5,7...
        arrayEvenOdd[index] = arrayInverse[index];
      }
    }
    // console.log(arrayEvenOdd);

    //Number is greater than 10
    for (let index = 0; index < arrayEvenOdd.length; index++) {
      if (arrayEvenOdd[index] > 9) {
        arrayTotal[index] = arrayEvenOdd[index];
        numberTemporary = arrayEvenOdd[index].toString().split("");
        numberTemporary.forEach((element) => {
          numberTemporaryInt = parseInt(element);
          numberTemporaryAdd += numberTemporaryInt;
        });
        arrayTotal[index] = numberTemporaryAdd;
        //Restart values
        numberTemporaryAdd = 0;
        numberTemporaryInt = 0;
      } else {
        //Number is less than 10
        arrayTotal[index] = parseInt(arrayEvenOdd[index]);
      }
    }

    //isValid
    // console.log(arrayTotal);
    let result = 0;
    arrayTotal.forEach((element) => {
      result += element;
    });
    // console.log(result);
    return result % 10 == 0 ? true : false;

    /*arrayInverse:  ['8', '7', '6', '5', '4', '3', '2', '1']
       arrayEvenOdd: ['8', 14, '6', 10, '4', 6, '2', 2]
       arrayTotal:   [8, 5, 6, 1, 4, 6, 2, 2]
       result:       34 // false
     */
  },

  maskify(number) {
    // console.log(number);
    let arrayMask = [];
    let sNumber = number.toString();

    //Replace #
    for (let index = 0; index < sNumber.length; index++) {
      if (index <= sNumber.length - 5) {
        arrayMask[index] = "#";
      } else {
        arrayMask[index] = sNumber[index];
      }
    }
    let result = arrayMask.join("");
    // console.log(result);
    return result;
  },
};

export default validator;
