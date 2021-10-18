//higher order functions are functions which either takes functions as argument or return function 

function multiply(a) {
    return function (x) {
        console.log(x * a);
    }
}

var multiplyByTwo = multiply(2);
var multiplyBythree = multiply(3);

multiplyByTwo(5);
multiplyBythree(10);