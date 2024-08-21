// if
let isUserLoggedIn = true;

if (isUserLoggedIn) {
}

// <, >, <=, >=, ==, !=, ===

const score = 200;

// if (score > 100) {
//   var power = "fly";
//   console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("allowed");
}
if (userLoggedIn || debitCard) {
  console.log("allowed");
}
