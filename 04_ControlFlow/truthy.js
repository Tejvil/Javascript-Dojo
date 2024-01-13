
/*
falsy values:
false, 0, BigInt 0n, "" (empty string),null, undefined , NaN

truthy values:
true, [ ], ( ), { }, "0", all strings, "false", function(){}, 
*/

// if (userEmail.length===0) {
//     console.log("array is empty");
// }

const emptyobj ={}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is Empty");
}

// Nullish Coalescing operator (??):null,undefined

let val1;
// val1 = 5 ?? 10
// val1 = nul ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternairy  Operator
// condition ? true : false

const iceteaPrice = 100 
iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");







