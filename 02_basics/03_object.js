// singleton 
// Object.create                            //used to creat/initiate object through constructor method (singleton)

// Object Literals                          //Objects are key:value pair structures

const MySym = Symbol("Key1")

const JsUser = {
    name:"tejvil",
    "full name":"Tejvil Chavan ",
    [MySym]:"MyKey_01",
    age:22,
    location:"SATARA",
    email:"tejvil@google.com",
    isloggedIn:false,
    lastLoginDays:["Mon","Sat"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);     //better way to print an object,because keys are taken as string as default and direct strings are immposible to print with Dot.
console.log(JsUser[MySym]);           //to use symbol as a key and to have dataType as symbol, you need to put it in a sq brakets[]

JsUser.email = "TC@gmail.com"
// Object.freeze(JsUser)                 //does not allow changes henceforth.
// JsUser.email = "Tdfgmdfgnnjn@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







