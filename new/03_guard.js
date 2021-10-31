/*
We can do explicit check of this to avoid polluting our global namespace
*/

/*
As we know this points to newly created object (when we use new keyword)
So we are sure if we are not using this keyword then this (the new object it's poiting to) will not be an instance of the constructor function 
*/
var Person = function (firstName, lastName) {

    if(!(this instanceof Person)) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;

}
//now result will be same if we don't include new keyword

const shub = Person('Shubham', 'Fuloria');

console.log(shub);