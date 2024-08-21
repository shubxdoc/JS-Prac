// When we write in global scope values are avialable in block scope
// but not vice-versa

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

/*

NOTE: global scope in browser and in code editor is differnt

*/

// Nested Scope

function one() {
  const username = "sam";
  function two() {
    const website = "yt";
    console.log(username); // sam
  }
  // console.log(website); // error
  two();
}

// one();

if (true) {
  const username = "sam";
  if (username) {
    const website = "yt";
    // console.log(username + website); // samyt
  }
  // console.log(website); //error
}
// console.log(username); //error

// ***************** interesting *****************

addone(5);
function addone(val) {
  return val + 1;
}

addTwo(5);
const addTwo = function (val) {
  return val + 2;
};
