function sayMyName() {
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
}

sayMyName; // reference , yaha pe bas ye bol rahe ki udhar bas rehta hai
// sayMyName(); //execution

function add(num1, num2) {
  // parameter
  console.log(num1 + num2);
}

// add(1, 2); //argument

// function loginUserMessage(username) {
//   //username === undefined can be written as !username
//   if (!username) {
//     console.log("enter name");
//     return;
//   }
//   return `${username} logged in`;
// }

// console.log(loginUserMessage());

// /--------------------------------------------/

// REST Operator (..num1) means bundle all values entered for this argument
function calCartPrice(...num1) {
  return num1;
}

// console.log(calCartPrice(100, 200, 300));

//Handle Objects
const user = {
  name: "asd",
  price: "000",
};

function handleObject(obj) {
  console.log(`username is ${obj.name} and price is ${obj.price}`);
}

handleObject(user);

//handle arrays
let arr = [1, 2, 4, 5];
function returnSecondValue(array) {
  console.log(array[1]);
}

returnSecondValue(arr);
