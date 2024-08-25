//for of

// let arr = [1, 2, 3, 5, 6]

// for (const num of arr) {
//   console.log(num)
// }

// const greetings = "hello"
// for (const greet of greetings) {
//   console.log(greet)
// }

//maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States")
map.set("Fr", "France")

for (const [key, value] of map) {
  console.log(key, " ", value)
}

const myObject = {
  game1: "NFS",
  game2: "Sideman",
}

for (const [key, value] of myObject) {
  console.log(key, " ", value)
}
