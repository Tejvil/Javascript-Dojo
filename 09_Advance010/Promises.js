
const PromiseOne = new Promise(function (resolve,reject) {                                    //new is use to create a new instance of something
    // do async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
})
PromiseOne.then(function () {                               //   .then is used to consume the created promise i.e call back function is initiated
    console.log("Promise Consumed");
})
 
new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("Promise Consumed 2");
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Tejvil", email:"Tejvil@example.com"})                            //mostly the data passed in resolve is usually object{}
    }, 1000);
})
PromiseThree.then((user) => {
    console.log(user);
})

// using .then() , .catch()
const Promisefour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // let error = true
        let error = false
        if (!error) {
            resolve({username:"Tejvil", password:"12345"})                          // .then() is used to call resolve to consume the Promise(to get value)
        }
        else{
            reject("ERROR.......")                                                 // .catch() is used to call reject in case of error while consuming the promise(getting value)
        }
    }, 1000);
})
Promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error=>{
    console.log(error);
}))
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
})

// using Async-await
const Promisefive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        // let error = false
        if (!error) {
            resolve({username:"Javascript", password:"123"})
        }
        else{
            reject("ERROR... JS went wrong")
        }
    }, 1000);
})
async function consumePromisefive(){
    try {
        const Response = await Promisefive
        console.log(Response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR........",error);
//     }
// }
// getAllUsers()


fetch('https://api.github.com/users/tejvil')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


