// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

const isNumber = num => typeof num === "number";

const isPositive = num => num > 0;

const isLessThanOrEqualTo100 = num => num <= 100;

function validate(num) {
  return isNumber(num) && isPositive(num) && isLessThanOrEqualTo100(num);
}

/*
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/*
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
