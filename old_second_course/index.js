// Number

// let age = 24;
// console.log(age);

// String

let nameCourse = "JavaScript";
// console.log(nameCourse);

// Boolean

let javaScriptIsFun = true;
// console.log(typeof javaScriptIsFun);

// undefined

let children;
// console.log(typeof children);

children = 3;

// console.log(children);

// null

let course = null;

let children2 = 3;

children2 = "Trei";

// console.log(children2);

//  Operatorii matematici
// +,-,*,/,**
// const now = 2022;
// const calcAge = now - 1991;
// console.log(calcAge);

const firstName = "Gabriel";
const lastName = "Muresan";
// console.log(firstName + " " + lastName);
// console.log(calcAge * 2, calcAge / 2, calcAge ** 3);

// operatorii de atribuire

let x = 20 + 5; // 25
// console.log(x);

x += 10; // x = x + 10;

x -= 5;

x *= 4;

// console.log(x);
x++;
x--;

// Operatorii de comparatie

// console.log(calcAge > 25);
// <, >, <=, >=, ==, ===

// Not operator => !

let hasDriverLicense = true;
// console.log(!hasDriverLicense);

// Strict equality => ===

// console.log(1 === "1");

// ==

// let, const (ES6+), var
// let - Urmeaza sa se modifice valoarea
javaScriptIsFun = "yes";
console.log(javaScriptIsFun);

// const - Nu-si modifica valoarea

const birthYear = 1995;
// birthYear = 1998;

// Structuri logice

// if
const age = 18;

if (age <= 18) {
  console.log("Can't have driving license.");
}

// while

let n = 0;
while (n < 3) {
  console.log(n++);
}

// Switch
// se compara in strict equality

// Ternary operator

age1 <= 18 ? doIfTrue : doIfFalse;

// FUnctions

//Function expression
// const calcAge2 = function(birthYear) {
// return 2022 - birthYear;
// }

IIFE(() => {
  let firstVar = 100000;
  let secondVar = 20000;
  console.log(firstVar, secondVar);
})();

// Scoping ---> global, function, block
