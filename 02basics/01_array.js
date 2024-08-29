//array
let arr = [1, 3, 2, 4, 5]
const heros = ["batman", "superman", "hangman"]
const arr2 = new Array(1, 2, 3, 4)

// console.log(arr2);
// console.log(arr2[1]);

// Array Methods

// arr2.push(6)
// console.log(arr2);
// arr2.pop()
// console.log(arr2);

// console.log(arr2.includes(2));
// console.log(arr2.indexOf(2));

// const newArr = arr2.join()

// console.log(newArr); // 1, 2, 3, 4 as string

// slice and splice
//-> slice(start, end)
//-> splice(start, deleteCount)

console.log("Original: ", arr2)

const myn1 = arr2.slice(1, 3)
console.log("slice " + myn1) //2, 3
console.log("Original: ", arr2)

const myn2 = arr2.splice(1, 3)
console.log("splice " + myn2) //2, 3, 4
console.log("Original: ", arr2)
