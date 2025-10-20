/*

console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);
console.log(60 + 30);

*/
/*
console.log(60 + 30);
const firstName = "Marco";
const job = "Soundengineer";
const birthYear = 1987;
const year = 2025;

const Marco =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(Marco);

const marcoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(marcoNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiples\n\
lines"
);

console.log(`String with
multiples
lines`);
*/
/*
const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  if (yearsLeft > 1) {
    console.log(`Sarah cannot start driving license. wait ${yearsLeft} years`);
  } else {
    console.log(`Sarah cannot start driving license. wait ${yearsLeft} year`);
  }
}
*/

// LESSON 20

// TYPE CONVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log("i am" + 23 + "uears old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);
