// Immediately Invoked Function Expression (IIFE)

(function run() {
  console.log("start");
})();

// () ()
// first () is for function defination second () is for execution

// IIFE is used cause sometimes there is a problem
// cause of the global scope pollution , so remove the
// pollution we used IIFE

// IIFE in arrow func.
// (() => {
//   console.log("start");
// })();
((name) => {
  console.log(`start, ${name}`);
})("sam");
