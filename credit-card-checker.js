/***** Project Goals *****/
//Check the validity of credit card numbers using the Luhn Algorithm
//Pass into a new array - the invalid credit card numbers by company name (i.e. card number beginning with '3' belongs to AMEX, '4' = Visa, etc.)

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [7, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6];


// Add your functions below:
//Function to check validity of credit card numbers, returns true if valid number and false if false using Luhn algorithm
const validateCred = arr => {
  let sumDigits = 0;
  for (let i = arr.length - 1; i >= 0; i--){
    let currVal = arr[i];
    //Condition finds odd numbers (or every other digit) to be doubled
    if ((arr.length - 1 - i) % 2 === 1) {
      currVal *= 2;
      if (currVal > 9) {
        currVal -= 9;
      }
    }
    sumDigits += currVal;
  }
  return (sumDigits % 10) === 0 ? true : false;
};
//Test Functions
console.log(validateCred(valid1)); //Returns true
console.log(validateCred(invalid2)); //Returns false
console.log(validateCred(mystery6)); //Returns false 
console.log(validateCred(mystery5)); //Returns true

//Accepts a nested array of credit card numbers and returns invalid cards
let invalidArr = [];
const findInvalidCards = arrOfCardNums => {
  for (let cards of arrOfCardNums) {
    if (!validateCred(cards)) {
      invalidArr.push(cards);
    }
  }
  return invalidArr;
};
findInvalidCards(batch);

//Associates invalid card numbers with companies and stores in an array ('company')
const idInvalidCardCompanies = idArr => {
  let company = [];

  for (let invalidId of idArr) {
    let Amex = invalidId.indexOf(3);
    let Visa = invalidId.indexOf(4);
    let MasterCard = invalidId.indexOf(5);
    let Discover = invalidId.indexOf(6);

    if (!Amex) {
      company.push('Amex');
    } 
    else if (!Visa) {
      company.push('Visa');
    } 
    else if (!MasterCard) {
      company.push('MasterCard');
    } 
    else if (!Discover) {
      company.push('Discover');
    } 
    else {
      company.push('Company not found.');
    } 
  }
  //Filters array of company for duplicates (the duplicates are where the index doesn't match the indexOf)
  const duplicatesRemoved = company.filter((companyId, index) => company.indexOf(companyId) === index);

  return duplicatesRemoved;
};
idInvalidCardCompanies(invalidArr);



