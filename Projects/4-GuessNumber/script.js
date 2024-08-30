let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const resultParas = document.querySelector(".resultParas")

const p = document.querySelector("p")

let prevGuess = []
let remainGuess = 1

let playGame = true

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault()
    const guess = userInput.value

    validate(guess)
  })
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid no.")
  } else if (guess < 1) {
    alert("Enter a greater value")
  } else if (guess > 100) {
    alert("Enter a value < 100")
  } else {
    prevGuess.push(guess)
    if (remainGuess >= 10) {
      displayGuess(guess)
      displayMessage(`Game Over. Random No. was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (randomNumber === guess) {
    displayMessage(`You Won. Random No. was ${randomNumber}`)
  } else if (guess < randomNumber) {
    displayMessage(`No. is too low`)
  }
}

function displayGuess(guess) {
  userInput.value = ""
  guessSlot.innerHTML += `${guess}, `
  remainGuess++
  remaining.innerHTML = `${10 - remainGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
  userInput.value = ""
  userInput.setAttribute("disabled", "")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
  resultParas.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const newBtn = document.querySelector("#newGame")

  newBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    remainGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = ""
    lowOrHi.innerHTML = ""
    userInput.removeAttribute("disabled")
    resultParas.removeChild(p)
    playGame = true
  })
}
