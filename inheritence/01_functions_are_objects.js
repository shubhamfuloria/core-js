/*
In javascript every function is an object, we can add properties and method to any function.
If you check typeof <function_name>, it will return "function" but all functions are objects behind the scene
 */

function Person() {
    console.log("I am running");
}

Person.age = 20;
Person.nationality = 'India';
Person.walk = () => console.log("Person is walking.");
Person.eat = () => console.log("Person is eating.");
Person.profession = 'Javascript Developer';

console.log(Person) //it's returning an object

console.log(typeof Person) //it's returning function, but it's behaving as object
//so functions are object behind the scene
//now I can access any property or method of Person as we do with object

console.log(Person.age);
console.log(Person.profession);
console.log(Person.nationality);
Person.walk();
Person.eat();

//I can call our function also as a normal function it will work as a function also at the same time 

Person();

/*
TAKEAWAY:

all functions are callable objects, we can add properties and method to a function.
Functions are special objects in javascript
*/