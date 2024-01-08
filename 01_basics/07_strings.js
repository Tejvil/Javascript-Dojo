const name = "Tejvil"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//  " ` ....` " is used for string interpoletion . ie.you can directly insert variables in placeholders

const gameName = new String ("Tejvil-S-C")
console.log(gameName);
console.log(gameName.__proto__.length);
console.log(gameName.toUpperCase());

const newString = "    Tejvil     "
console.log(newString);
console.log(newString.trim());

const url = "https://tejvil.com/tejvil%23chavan"
console.log(url.replace('%23','-'));

console.log(gameName.split('-'));
