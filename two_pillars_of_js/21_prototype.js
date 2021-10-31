function C() {};

var c = new C();

console.log(c instanceof C) //true
console.log(c.constructor === C) //true;
C.prototype = {prototype_prop : "prop"};

console.log(c instanceof C); //false