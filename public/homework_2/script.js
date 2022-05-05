"use strict";

// Useful functions

const isPrime = (number) => {
  for (let i = 2; i * i <= number; i++) if (number % i === 0) return false;
  return number > 1;
};

// 1. Create a function which takes as a parameter a number and
// returns it's double if the number is odd, otherwise,
// if the number is even, it returns the number substracted by 2.
// The result is logged in the console.

function isEvenOrOdd(number) {
  console.log(
    "1. Function to check if the number is even or odd.\n\nIf the provided number is even, the function returns the number substracted by 2.\n\nOtherwise, if the number is odd, it returns the double of the number."
  );
  if (number % 2 === 0) {
    return number - 2;
  }
  return number * 2;
}

console.log(isEvenOrOdd(5));

// 2. Create a function which stores in an array only the prime numbers
// from another array received as a parameter. Loop through the array using a
// 'for' loop. Log the result in the console.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const savePrimes = (arr) => {
  console.log(
    "\n2. Create a function which stores in an array only the prime numbers from\n\nanother array received as a parameter. Loop through the array using a\n\n'for' loop. Log the result in the console."
  );
  const arrOfPrimes = [];
  for (let i = 0; i <= arr.length; i++) {
    if (isPrime(arr[i])) arrOfPrimes.push(arr[i]);
  }
  return arrOfPrimes;
};

console.log(savePrimes(arr));

// 3. Create a function which stores into an array only strings from an array
// received as a parameter. Loop through the array using a 'forEach' loop.
// Log the result in the console.

const secondArr = [1, "1", "salut", 2, 6, true, "true"];

const saveStrings = function (arr) {
  console.log(
    "\n3. Create a function which stores into an array only strings from an array\n\nreceived as a parameter. Loop through the array using a 'forEach' loop.\n\nLog the result in the console."
  );
  let arrOfStrings = [];
  arr.forEach(
    (element) => typeof element === "string" && arrOfStrings.push(element)
  );
  return arrOfStrings;
};

console.log(saveStrings(secondArr));

// 4. Create a function which adds the odd digits of a number received as a
// paramater (string) using a 'for' loop and the 'continue' keyword.

let stringNumber = "1523";

((stringNumber) => {
  console.log(
    "\n4. Create a function which adds the odd digits of a number received as a\n\nparamater (string) using a 'for' loop and the 'continue' keyword."
  );
  let sumOfOddDigits = 0;
  for (let i = 0; i < stringNumber.length; i++) {
    if (Number(stringNumber[i]) % 2 === 0) continue;
    sumOfOddDigits += Number(stringNumber[i]);
  }
  console.log(sumOfOddDigits);
})(stringNumber);

// 5. Create a switch with atleast 5 cases out of which atleast two to have the same result.

console.log(
  "\n5. Create a switch with atleast 5 cases out of which atleast two to have the same result."
);

let userPreference = "React";

switch (userPreference.toLowerCase()) {
  case "html":
    console.log("You could use some CSS...");
    break;
  case "css":
    console.log("Styling is very important!");
    break;
  case "javascript":
    console.log("Very good!");
    break;
  case "react":
  case "angular":
  case "vue":
    console.log("Any framework or library is fantastic!");
    break;
  case "c":
  case "c++":
    console.log("Pointers are fantastic!");
    break;
  case ".net":
  case "c#":
    console.log("You... I like you.");
    break;
  case "java":
    console.log("Java runs on 56 billion devices! Wow, that's a huge number!");
    break;
  case "php":
    console.log(
      "I heard great and noble things about Laravel, but I am too afraid to try it just yet..."
    );
    break;
  case "assembly":
    console.log("pls no...");
  default:
    console.log(
      "Uh oh... I've probably forgot about that or never heard of it."
    );
}
