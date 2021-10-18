//ways of creating a function

//1.
function A() {
    console.log("Function A is running!");
}

A.call();

//2.

var B = {
    func() {
        console.log("Function func is running");
    }
}

B.func();


let C = new Function('num', "console.log(num)"); //function constructor 

C(5);

//function acting as objects

function one() {
    console.log("one is running");
}

one.hi = "look I am property of a function."; //here we can clearly see one() is working as an object

console.log(one.hi);