// stack and heap memory.

//                         stack -> primitive ,                                                                 heap -> non primitive
//  (it takes copy of data,ie.changes are not reflected in original data)           (it take reference of data,ie.any changes made are reflected to original data)

// stack example:

let myYoutubeName = "FXmafia.com"
let anotherName = myYoutubeName
anotherName = "FXmafia_trading"
 console.log(myYoutubeName);
 console.log(anotherName);

//  heap example :

let userOne = {
    email:"user1@google.com"

}

let userTwo=userOne

userTwo.email="User2@google.com"

console.log(userOne.email);
console.log(userTwo.email);