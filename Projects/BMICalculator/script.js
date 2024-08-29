//1. Approach
// const btn = document.querySelector("button")
// const result = document.querySelector("#results")

// btn.addEventListener("click", (e) => {
//   e.preventDefault()
//   let height = document.querySelector("#height").value / 100
//   let weight = document.querySelector("#weight").value

//   let ans = (weight / (height * height)).toFixed(2)

//   result.innerHTML = `Your bmi is ${ans}`
// })

//2.Approach
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please give a valid height"
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight"
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    let weightCat

    if (bmi < 18.6) {
      weightCat = "under weight"
    }
    if (bmi > 18.6 && bmi < 24.9) {
      weightCat = "normal range"
    }
    if (bmi > 24.9) {
      weightCat = "Over weight"
    }

    result.innerHTML = `Your BMI is ${bmi} and you are ${weightCat}`
  }
})
