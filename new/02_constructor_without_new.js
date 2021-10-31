/*
We can use new operator on ANY function. (Even on non construcotrs)
we can call function intended as constructor with our without the new keyword.
*/

const Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var shub = new Person('Shubham', 'Fuloria');
var naman = Person('Naman', 'Rawat'); //forget new keyword

console.log(shub);
console.log(naman); //=>undefined
console.log(window);
/*
naman is undefined, but our window object has both properties
firstName and lastName.
WHY ?

One of the action new operator does is changing this from global to newly created object
When new is not specified, constructor is considered an ordinary function call. and this remains usual (pointing to global object or in whichever object we are using it)

then this.firstName = firstName => sets the property of this(window) object's firstName as 'Naman' Same for lastName. Here we just polluted our global namepsace.

Another thing new operator does is return the newly created object.
here it's not returning anything (which means return undefined).


*/