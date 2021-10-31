function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    return {hello : "hello"}
} 

const shub = new Person('Shubham', 'Fuloria');
console.log(shub);



/*
What new does here : 

1. It creates a new blank object.
2. It makes this (keyword) to point to this newly created object inside the     constrcuctor function
3. It sets the prototype of the newly created object to the constructor functin's prototype.
4. It makes the constructor function return the newly created objcect IF it's not returning anything


*/