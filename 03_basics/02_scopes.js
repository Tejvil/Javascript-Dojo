// avoid using var at all costs
// everything that is called initiated is a block {......} should be dployed from the block scope itself and should not interfer in global scope 
let a=300
if (true) {
    let a=20
    const b=40
    console.log("inner:", a, ",",b);
}
console.log(a);


// +++++++++++++++++++++        nested scope/function
function one() {
    const username = "Tejvil"
    function two() {
        const website = "youtube"
        console.log(website);
    }
    two()
    console.log(username);
}
one()



//+++++++++++++++++++++++       diff. ways to display function
function addOne(num) {
    return num+1
}
addOne(5)

const addTwo = function(num){
    return num+2
}
addTwo(4)

