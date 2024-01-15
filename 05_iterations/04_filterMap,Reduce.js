const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNum.filter( (num) => num>4 )
// const newNums = myNum.filter( (num) => {
//     return num>4                           //if you use {} you need to use return key word because now it comes inside a scope.
// } )

const NewNums = []
myNum.forEach ((num) => {
    if (num > 4 ){
        NewNums.push(num)
    }
})

console.log(newNums);
console.log(NewNums);

console.log("*************** FILTER ******************");

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter ((bk) => bk.publish >= 2000)

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })

console.log(userBooks);

console.log("+++++++++++++++++++++ MAP ++++++++++++++++++++++");

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumber = myNumbers.map((num) => num +10 )

const newNumbers = myNumbers
                            .map((num) => num *10 )
                            .map((num) => num + 3)
                            .filter((num) => num>=40)                            
console.log(newNumber);
console.log(newNumbers);

console.log("++++++++++++++++++++++++ REDUCE ++++++++++++++++");

const myNums = [1,2,3,4,5]
// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`accumulator : ${accumulator} and current value : ${currentvalue}`);
//     return accumulator + currentvalue
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);


const shoppingcart = [
    {
        itemName:"js course",
        price:2500
    },
    {
        itemName:"Java course",
        price:1500
    },
    {
        itemName:"Python course",
        price:3500
    },
    {
        itemName:"Cpp course",
        price:1000
    }
]

const topay = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log(topay);



