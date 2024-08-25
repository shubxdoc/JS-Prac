//-------- Reduce

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10

//-------------------
// const myNums = [1, 2, 3]

// const total = myNums.reduce((acc, currval) => {
//   console.log(`${acc} + ${currval} ye ho reha hai `)
//   return acc + currval
// }, 0)
// console.log(total)

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
]

let ans = shoppingCart.reduce((acc, currval) => acc + currval.price, 0)

console.log(ans)
