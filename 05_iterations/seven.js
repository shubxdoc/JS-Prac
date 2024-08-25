const myNums = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// let ans = myNums.map((num) => num + 10)

//Chaining
let ans = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40)

console.log(ans)
