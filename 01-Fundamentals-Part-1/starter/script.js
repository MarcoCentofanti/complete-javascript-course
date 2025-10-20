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
/*
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

*/
/*
// LESSON 21
//  5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Dont spend it all ;)");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("DEFINED");
} else {
  console.log("UNDEFINED");
}
*/

// LESSON 22

const age = 18;
if (age === 18) console.log("you just became an adult (Strict)");

if (age == 18) console.log("you just became an adult (loose)");

const age2 = "18";
if (age2 === 18) console.log("you just became an adult (Strict)");

if (age2 == 18) console.log("you just became an adult (loose)");

const favorite = Number(prompt("insert a number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool 23!");
} else if (favorite === 7) {
  console.log("7 is Cool");
} else if (favorite === 9) {
  console.log("9 is also Cool");
} else {
  console.log("No 23, 7 or 9");
}

if (favorite !== 23) {
  console.log("wht not 23?");
}
