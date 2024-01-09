// const tinderUser = new Object()              //this is an singelton object
const tinderUser = {}                          //this is an non-singelton object
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

const regularUser = {
    email:"sam@gmail.com",
    fullname:{
        userFullname:{
            UserFirstName:"Tejvil",
            UserLastName:"Chavan",
        }
    }

}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.UserFirstName);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}

// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}  //combine two object
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// *************************************************destructuring an object
const course = {
    coursename : "javascript",
    price : "999",
    courseinstructor :"hitesh"
}
const {courseinstructor} = course
console.log(courseinstructor);

