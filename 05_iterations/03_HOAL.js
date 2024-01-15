// higher order array loops

// for of
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key);
}
// const myObject = {
//     "game1" : "NFS",
//     "game2" : "Farcry"
// }
// for (const [key,value] of myObject) {
//     console.log(key);
// }      Objects are not itteratable by this method we need to use forin loop

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
// for each
const coding = ["JS","ruby","java","python","cpp"]
coding.forEach( function (item) {  //because it is call back function it does not have a name.
    //also because this function is inside an array, the values will automatically be filled inside parameter.
    // console.log(item);
})
// coding.forEach((item) => {
//     console.log(item);
// })

coding.forEach((item , index , arr)=>{
    // console.log(item , index , arr);
})



const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "JS"
    },
    {
        languageName : "python",
        languageFileName : "Py"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Ruby",
        languageFileName : "Rb"
    },

]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
})








