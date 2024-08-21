const user = {
  username: "sam",
  price: 444,

  welcomeMessage: function () {
    console.log(`${this.username} welcome`); //sam welcome
    console.log(this); // {username: 'sam', price:444, welcomeMessage: [Function:welcomeMessage]}
  },
};

// user.welcomeMessage();
// console.log(this); // {} but in browser it returns window

// ------------------------------------------------ //

// this only works in objects
function one() {
  let user = "sam";
  console.log(this.user); //undefined
}
// one();

// -------------------------------------------- //

//-> this behaviour

// const val = function one() {
//   let user = "sam";
//   console.log(this.user); // undefined
// };
// const val = () => {
//   let user = "sam";
//   console.log(this); // {}
// };

// val();

// --------------------------------------- //
const user2 = {
  username: "sam",
  price: 444,

  welcomeMessage: () => {
    console.log(`${this.username} welcome`); //undefined welcome
    console.log(this); // {}
  },
};

// this dosent work in arrow function when
// inside an object
// user2.welcomeMessage();

//Implicit return
// const addtwo = (num1, num2) => num1 + num2;
const addtwo = (num1, num2) => num1 + num2;
console.log(addtwo(1, 2));
