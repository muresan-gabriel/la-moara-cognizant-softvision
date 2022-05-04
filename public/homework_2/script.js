"use strict";

// 1. Create a function which takes as a parameter a number and
// returns it's double if the number is odd, otherwise,
// if the number is even, it returns the number substracted by 2.
// The result is logged in the console.

function isEvenOrOdd(number) {
  console.log(
    "1. Function to check if the number is even or odd.\n\nIf the provided number is even, the function returns the number substracted by 2.\n\nOtherwise, if the number is odd, it returns the double of the number."
  );
  if (number % 2 === 0) {
    return (number -= 2);
  }
  return number * 2;
}

console.log(isEvenOrOdd(5));
