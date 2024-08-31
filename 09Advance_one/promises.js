// const promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //DB calls , crypto, network
//   setTimeout(function () {
//     console.log("Async task is complete")
//     resolve()
//   }, 1000)
// })

// promiseOne.then(function () {
//   console.log("Promise consumed")
// })

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2")
//     resolve()
//   }, 1000)
// }).then(function () {
//   console.log("Async 2 consumed")
// })

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Shub", email: "email@example.com" })
//   }, 1000)
// })

// promiseThree.then(function (user) {
//   console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false
//     if (!error) {
//       resolve({ username: "Shub", pass: 123 })
//     }
//     reject("Error: Something went wrong")
//   }, 1000)
// })

// promiseFour
//   .then(function (user) {
//     console.log(user)
//     return user.username
//   })
//   .then((username) => {
//     console.log(username)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => console.log("promise either is reolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: "Shub", pass: "123" })
    } else {
      reject("Error: JS went wrong")
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive()

// async function getAllUser() {
//   try {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log("E:", error)
//   }
// }
// getAllUser()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("E:", error))
