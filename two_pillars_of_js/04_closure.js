/*
Closure : Combination of function and lexical env
Closure allows a function to access a variable from an enclosing scope, even after it leaves the scope where it was declared
*/

function a() {
    let grandpa = 'Grandpa';
    return function b() {
        let father = 'Father';
        let test = 1000;
        return function c() {
            let son = 'Son'
            console.log(`${grandpa} > ${father} > ${son}`);
        }
    }
}

var a_returned = a();
var b_returned = a_returned(); //a_returned : b;
b_returned();

/*
b() and b() are not in scope as they are already removed from the call stack, so all memory allocated to their variables will be freed,  but still we are able to use variable of a() and b() which are grandpa and father. This is closure. Closure retains all the properties which are used in nested scopes.

test is also in b() scope(), but closure will not be created for test as this variable is never used by any nested function.

Closure is created for only those variable which are referenced(used) by any nested function.
*/