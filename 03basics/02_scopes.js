// When we write in global scope values are avialable in block scope
// but not vice-versa

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);

/*

NOTE: global scope in browser and in code editor is differnt

*/
