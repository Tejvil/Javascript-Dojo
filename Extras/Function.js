// +++++++++++++++++++++++++++++++++++++++++         Function Declaration         ++++++++++++++++++++++

function printMe() {
    console.log("Printing...");
}
printMe()                      //calling a function



function printThis(param) {
    console.log(param);
}
printThis("Tejvil")


//using function expresion
const printit=function () {
    console.log("print");
}
printit()

//  +++++++++++++++++++++++++++++++++++++++++        returning a function  +++++++++++++++++++++++++++++++++

function sum (a,b){
    return a+b;
}
console.log(sum(2,3));

//+++++++++++++++++++++++++++++++++++++++++++        Rest Parameter     ++++++++++++++++++++++++++++++++++++++
//rest parameter allows a function to accept infinite of arguments.
//there can only be one rest parameter in a function and that should be the last parameter.denoted by ... 

function collectThings(x, ...y) {
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,44,56,45756,867,8679,67);
console.log(collectThings);

//+++++++++++++++++++++++++++++++       arrow function          ++++++++++++++++++++++++++++++++
// arrow function does not include function key word insted it uses => to denote itself as a function.

// const add =function(x,y){
//     return x+y;
// }

const add = (x,y) => x+y;              //using arrow function
console.log(add(2,3));


// +++++++++++++++++++++++++++++           nested function      ++++++++++++++++++++++++++++++++++

function outer(){
    console.log("outer");
        function inner() {
            console.log("inner");
        }
        inner()
}
outer()

// ++++++++++++++++++++++++++++++          scope function       +++++++++++++++++++++++++++++++

function doSomething() {
    let x=10;
    const y=20;
    var z=30;
    console.log(x,y,z);
}
doSomething();
//variables defined inside a function cannot be accessed anywhere outside of the function

var a=10;
const b=20;
let c=30;
function doSomeThing(){
    console.log(a,b,c);
}
doSomeThing()
//a function can access all the variable inside a scope in which it is defined

// ++++++++++++++++++++++++++++++++++++     closures        +++++++++++++++++++++++++++

function Outer(x) {
    function Inner(y) {
        return x+y;
    }
    return Inner()
}
const outerReturn = Outer(10);
outerReturn
// +++++++++++++++++++++++++++++++++++      CallBack  function  +++++++++++++++++++++++++++++++++++++++++
// the main function is not mandetory for main function to return any function which makes it different from HOF.

function func(bar) {
    bar();
}
func(function () {
    console.log("bar");
})
//here,a function can take another function as an arrgument.


// +++++++++++++++++++++++++++++++++++          Higher Order Function        +++++++++++++++++++++++++++++++
//it is just regular function that takes 1 or more functions as an argument and it may return a function.
// function returning a function is also called as a higher order function.

function getCapture(camera) {
    camera();
}
getCapture((function() {
    console.log("cannon");
}))


function returnFn() {
    return function(){
        console.log("returning");
    }
}
const fn= returnFn();


// +++++++++++++++++++++++++++++++++++++++++++      IIFE   (immidiately invoked function expresion)     +++++++++++++++++++++++++++
// in iife it is not mandetory to give function name.but need to write a function inside parenthesis().
(function(){
    console.log("iife");
})
()//called function

// +++++++++++++++++++++++++++++++++++++++++++          

