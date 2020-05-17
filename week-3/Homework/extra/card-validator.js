const isValidLength = (digits) => digits.length === 16;

const isAllDigits = (digits) => !digits.includes(NaN);

const nonUniqueDigits = (digits) => [...new Set(digits)].length >= 2;

const sumGreatEnough = (digits) => digits.reduce((a, b) => a + b) > 16;

const lastDigitEven = (digits) => digits[digits.length - 1] % 2 === 0;

const isValidNumber = (number) => {
  const digits = number.split("").map((digit) => parseInt(digit));
  return (
    isValidLength(digits) &&
    isAllDigits(digits) &&
    nonUniqueDigits(digits) &&
    sumGreatEnough(digits) &&
    lastDigitEven(digits)
  );
};

console.log(isValidNumber("9999777788880000"));
console.log(isValidNumber("6666666666661666"));
console.log(isValidNumber("a92332119c011112"));
console.log(isValidNumber("1111111111111110"))
// const validateCardNumber = number => {

//     if (!isValidLength(number))
//         return false;

// }
