// DATA - TYPES :-

// Primitive
// 7 types: String, Num, Boolean, null, undefined, Symbol, BigInt(scientific values)

const value = 100;
const valueD = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false

const bigNumber = 1324567890123123n;

// Reference (Non - Primative) -> inka datatype object aata hai
// Array, Objects, Functions

const heros = ["batman", "superman", "ironman"];

let myObj = {
  name: "Abc",
  age: 33,
};

const myFunction = function () {
  console.log("Hello");
};
