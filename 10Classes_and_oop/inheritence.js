class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`)
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username) // super automatic this ka access leleta hai and value le aata hai
    this.email = email
    this.pass = pass
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`)
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

// chai.addCourse()

const masalaChai = new User("masala")

masalaChai.logMe()

console.log(chai instanceof User)
