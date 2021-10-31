function fun(){
    this.greet = "Hello";
}

console.log(global.greet);  //undefined => no greet variable in global scope
let x = fun(); //forget to write new keyword
console.log(x); //undefine => as the function does not return anything
console.log(global.greet); //hello => we've polluted the global namespace



