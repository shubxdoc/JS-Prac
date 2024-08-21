const userEmail = [];

if (userEmail) {
  console.log("got useremail");
} else {
  console.log("dont have usermail");
}

// Falsy values
false, 0, -0, BigInt, "", null, undefined, NaN;

// Rest all are considered as Truthy value
"0", "false", " ", [], {}, function () {};

if (userEmail.length === 0) {
  console.log("Array is empty");
}

let emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//-> Nullish Coalesing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniery Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
