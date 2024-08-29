// 1.Approach

// const grey = document.querySelector("#grey")
// const white = document.querySelector("#white")
// const blue = document.querySelector("#blue")
// const yellow = document.querySelector("#yellow")

// grey.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "grey")
// )
// white.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "white")
// )
// blue.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "blue")
// )

// yellow.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "yellow")
// )

// 2.Approach

const buttons = document.querySelectorAll(".box")
const bgC = document.body.style.backgroundColor

buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.id == "grey") {
      document.body.style.backgroundColor = "grey"
    }
    if (e.target.id == "white") {
      document.body.style.backgroundColor = "white"
    }
    if (e.target.id == "blue") {
      document.body.style.backgroundColor = "blue"
    }
    if (e.target.id == "yellow") {
      document.body.style.backgroundColor = "yellow"
    }
    if (e.target.id == "reset") {
      document.body.style.backgroundColor = bgC
    }
  })
})
