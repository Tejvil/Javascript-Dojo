const score = 400
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));

const otherNumber = 1024.555
const otherNumbers = 14.5895
console.log(otherNumber.toPrecision(5));
console.log(otherNumbers.toPrecision(3));

const hunderds=100000000
console.log(hunderds.toLocaleString());
console.log(hunderds.toLocaleString(`en-In`));

// *******************************************************************************MATHS****************************************************************

console.log(Math);
console.log(Math.abs(-554)); //converts into positive value
console.log(Math.round(32.55));
console.log(Math.ceil(32.5554));
console.log(Math.floor(32.9));


console.log(Math.random());//gives random values between 0 and 1 
console.log((Math.random()*10));//this will shift the decimal point by one place, giving us value outside 0 and 1
console.log(Math.floor(Math.random()*10)+1);//this confirms that the value will not be zero .//this could be used as ex of "dice" 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

