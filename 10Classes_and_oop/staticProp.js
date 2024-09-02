class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username: ${this.username}`)
  }

  static createId() {
    //access rok dega 'static'
    return `123`
  }
}

const shub = new User("shub")
// console.log(shub.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphoneNaam", "iphone@Gamil.com")

console.log(iphone.createId())
