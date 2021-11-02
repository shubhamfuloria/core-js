/*
Every object has access to it's constructor function, which is present in <function_name>.prototype.constructor (which references to function itself)
When we create objects using literals ({}, []), will have Object, Array constructor functions in their prototype chain.
So their constructor will be Object.prototype.constructor and Array.prototype.constructor respectively.
*/

var array = [1, 2, 3];
console.log(array.constructor === Array) //true

var arr = new Array(10);
console.log(arr.constructor === Array) //true

var obj = {name : "Shubbham"};
console.log(obj.constructor === Object) //true

var obj2 = new Object();
console.log(obj2.constructor === Object) //true

//<function>.prototype.constructor references to function <= mind this. 