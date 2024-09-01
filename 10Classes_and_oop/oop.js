const user = {
  username: "Shub",
  loginCountL: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    console.log(`Username: ${this.username}`)
  },
}

// console.log(user["username"])
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedin) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedin = isLoggedin

  return this
}

const userOne = new User("naam", 12, true)
const userTwo = new User("Jaan", 11, false)

console.log(userOne)
