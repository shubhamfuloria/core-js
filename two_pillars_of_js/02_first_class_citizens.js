//functions are called first class citizens of JS
// first-class citizenship simply means “being able to do what everyone else can do."

/* Which means function can do what other varialbes can do */

//1. We can assign functions to any variable

var func = function () {
    console.log("Hello, I am func.");
}
func();

//2. We can pass functions as an argument to another function

function a(fun) {
    fun();
}

a(function () {console.log("I am fun.")});

//3. We can return functions from any function

function b() {
    return function () {
        console.log("Hi, I am returned function.");
    }
}

b()();


/*
As we saw functions can do anything what other variables can do, so this is called first citizenship of functions in JS.
Really JavaScript is Sexy.
*/