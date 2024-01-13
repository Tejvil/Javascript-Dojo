// If
const score = 200

if (score>100) {
    let power="fly"
    console.log(`user power : ${power}`);
}

const bal = 800
// if (bal > 500) console.log("test");
if (bal < 500) {
    console.log("less than");
}   else if (bal > 500){
                if (bal <750) {
        console.log("less than 750");
        }       else console.log("greater than 500");
}else console.log("error");

const UserloggedIn = true
const debitCard = true
const loggedinfromEmail = true
const loggedinfromGoogle=false


// &&,|| denotes that all conditions must be true or false respectively
if (UserloggedIn && debitCard) {
    console.log("Allow buying the Course");
}
if (loggedinfromGoogle||loggedinfromEmail||true){
    console.log("User logged in");
}





















