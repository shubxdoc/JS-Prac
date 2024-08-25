// let coding = ["js", "ruby", "java", "cpp", "python"]

// for Each

// coding.forEach((val) => {
//   console.log(val)
// })

// function printMe(item) {
//   console.log(item)
// }

// coding.forEach(printMe) // yaha hamne above function ka reference diya hai execute nahi kiya

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr)
// })

let myCoding = [
  { lang: "java", filename: "java" },
  { lang: "python", filename: "py" },
  { lang: "javascript", filename: "js" },
  { lang: "c++", filename: "cpp" },
]

myCoding.forEach((item, index) => {
  console.log(item.lang, item.filename, index)
})
