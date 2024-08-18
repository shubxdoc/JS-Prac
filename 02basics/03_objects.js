/*
NOTE:

Objects are declared in 2 ways "LITERALS" and "CONSTRCTORS"

i> when creating using constrctors that object is 'singleton'
  meaning its unique

  > ex: Object.create

ii> when creating as literals which is the "normal" way it has multiple
    instances

  > ex:  const obj = {
            name: 'abc',
          }

*/

// Objects literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Sahab",
  "full name": "Thakur Bhanu Pratap", // to access this jsUser["full name"]
  age: 23,
  location: "texas",
  email: "email@google.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
  [mySym]: "mykey1", // to access this symbol jsUser[mySym]
};
// console.log(jsUser);

// 2 ways to access values
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// to overite values
jsUser.email = "def@google.com";

//to freeze objects so that you can change the keys
// Object.freeze(jsUser);

//to add a function
jsUser.greeting = function () {
  console.log(`Hello js user ${this.name}`);
};

console.log(jsUser.greeting()); //undefined
