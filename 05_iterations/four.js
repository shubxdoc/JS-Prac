// for In loop
const myObj = {
  js: "javascript",
  cpp: "c++",
  swift: "swift by apple",
}

// for (const key in myObj) {
//   console.log(`${key} is shortcut for ${myObj[key]}`)
// }

const programming = ["js", "cpp", "py", "rb", "java"]

// for (const key in programming) {
//   console.log(programming[key])
// }

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States")
map.set("Fr", "France")

for (const key in map) {
  console.log(key)
}
