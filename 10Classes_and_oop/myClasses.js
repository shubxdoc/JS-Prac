// ES6

// class User {
//   constructor(username, email, pass) {
//     this.username = username
//     this.email = email
//     this.pass = pass
//   }

//   encryptPassword() {
//     return `${this.pass}abc`
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`
//   }
// }

const sai = new User("chai", "bahi@gmail.com", "123")

// console.log(sai.encryptPassword())

// console.log(sai.changeUsername())

// behind the scence

function User(username, email, pass) {
  this.username = username
  this.email = email
  this.pass = pass
}

User.prototype.encryptPassword = function () {
  return `${this.pass}abc`
}
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword())
console.log(tea.changeUsername())
