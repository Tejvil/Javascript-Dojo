/*
 primitive:
 string ,number , boolean , null , undefined , symbol , BigInt 
 */

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);

const bigNumber = 364794846549n

 /* 
 non- premitive:
 array , objects , functions
*/

const heros = ["ironman","thor","antman"];
let myObj= {
    name:"Tejvil" ,
    age:22,
}
// objects are writen in "{  }" curly braces.

const myFunction = function(){
    console.log("hello world");
}
