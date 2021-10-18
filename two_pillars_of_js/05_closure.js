function func(string){
    return function first(firstName) {
        return function last(lastName) {
            console.log(`${string} > ${firstName} > ${lastName}`);
        }
    }
}


var first = func("Javascript");
var last = first("Shubham");
last("Fuloria");

/*
Parameters are also variables of that scope, so they are also stored in closure property iff any nested function is using them.

*/