
const user ={
    username : "Tejvil",
    price : 999,

    welcomemessage:function () {
        console.log(`${this.username}`, "welcome to website");      //this keyword refers to current context
        // console.log(this);
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()

// console.log(this);

const one = ()=>{
    let username = "Tejvil"
    console.log(this);
}
one()

// +++++++++++++++++++++                arrow function
// const add = (num1,num2)=>{
//     return num1+num2
// }
// console.log(add(2,3));


const add = (num1,num2)=>(num1+num2)
console.log(add(2,3));









