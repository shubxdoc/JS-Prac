const name = "abc";
const repCount = 50;

// console.log(name + repCount + "Value");

console.log(`hello my name is ${name} and repo count is ${repCount}`); // Follow the backticks(``) syntax

const gameName = new String(" abc-de");

console.log(gameName);

console.log(gameName[1]); // we can access key value pair

console.log(gameName.__proto__);

console.log(gameName.endsWith("c")); // true
console.log(gameName.includes("z")); // false
console.log(gameName.toUpperCase()); // ABC

console.log(gameName.substring(0, 4)); // abc-
console.log(gameName.slice(-4, -1)); // c-d
console.log(gameName.trim());
console.log(gameName.replace(" ", "-"));
