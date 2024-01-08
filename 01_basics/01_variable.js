const accountId =144553
let accountEmail ="ABC@gmail.com"
var accountPassword ="12345"
accountCity ="Satara"
let accountstate;

// accountId=232 ---not allowed because const does not allow it
accountEmail="xyz@gmail.com"
accountPassword="01234"
accountCity="pune"

console.log(accountId);


/*
note:prefer not to use var
because of issue in block scope "{----}"
*/
console.table([accountEmail,accountPassword,accountCity,accountstate])

// let and const are hoisted,these are in temporal dead zone for a time being
// ..these are different than var