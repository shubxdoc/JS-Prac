class User {
  constructor(email, pass) {
    this.email = email
    this.pass = pass
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }

  get pass() {
    return this._pass.toUpperCase()
  }

  set pass(value) {
    this._pass = value
  }
}

const shub = new User("shu@gg.ai", "abc")

console.log(shub.pass)
console.log(shub.email)
