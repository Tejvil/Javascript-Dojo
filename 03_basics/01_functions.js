
function addNum(num1,num2){
    // console.log(num1+num2);

    /*let result=num1+num2
    return result*/

    return num1+num2
}
addNum(5,3)
const result = addNum(5,3)
console.log("result:",result);

function loginUserMessege(username){
    // if(username === undefined){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessege("Tejvil"));
console.log(loginUserMessege());



function calculatecart(...num01){
    return num01
}
console.log(calculatecart(200,500,800));

 const user ={
    name :"tejvil",
    price:199
 }
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}` );
}
handleObject(user)




const myNewArray = [200,400,500,600]

function ReturnSecondValue(getArray) {
    return getArray[2]
}
console.log(ReturnSecondValue(myNewArray));

