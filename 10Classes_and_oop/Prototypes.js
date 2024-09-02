// let myName = "Shub    "
// let drink = "chai    "

// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`)
  },
}

Object.prototype.shub = function () {
  console.log(`shub is present eveywhere`)
}

Array.prototype.heyShub = function () {
  console.log(`shub array is here`)
}

// heroPower.shub()
// myHeros.shub()

myHeros.heyShub()
// heroPower.heyShub()

///Inheritence

const User = {
  name: "Bhai",
  email: "bahi@gmail.com",
}

const teacher = {
  makeVideo: true,
}

const TeachingSupport = {
  isAvilable: false,
}

const TASupport = {
  makeAssignment: "JS",
  fullTime: true,
  __proto__: TeachingSupport,
}

teacher.__proto__ = User

// mordern syntax (new way of inheritence)
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "BhaiBahi    "

String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`true length is  ${this.trim().length}`)
}

anotherUsername.trueLength()
"Shub".trueLength()
