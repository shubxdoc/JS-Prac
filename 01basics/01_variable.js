const accountId  = 144453
let accountEmail = "abc@google.com"
var accountPass = "12345"
accountCity =  "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "as@as.com"
accountPass = "54321"
accountCity = "Goa"


/*
Don't use var at all.
Cause of issue in block scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountState])