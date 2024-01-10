// imidiately invoked function expresion
// iife is used to reduce to pollution caused by variables of global scope
// syntax :  (write code)(call function);

(function one (){
    console.log("Tejvil ");
})();

( () => {
    console.log("Chavan");
})()


( (name) => {
    console.log(`${name}`);
})("Chavan");

