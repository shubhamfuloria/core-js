/*
As we see in the previous code, all the functions are actually objects, 
So how will we differentiate between them ? 
How will we know that this is function (callable object) and this is object(normal object) ?
*/

function fun(){
    console.log("I am running");
}

var obj = {
    name: "Shubham"
}

/*
Things to know before proceeding : 
__proto__ :-> aka [[Prototype]], we can access this using Object.getPrototypeOf(<object_name>) or <obj>.__proto__
It is actually a link which is present in every object (including special objects) which points to the prototype object of 
constructor function.

Now you must be thinking then what is this prototype object of constructor function. Let's dive deeper...

In javascript every function (special object) has a prototype object. When the function is working as a constructor function
we can attatch properties and methods to this prototype object. Then all the instances of that constructor function will have
access to this prototype object's properties and methods.

Let's see the example of the last para..
*/

function Person(name) {
    this.name = name;
}

//let's add some properties and methods to prototype object of Person constructor
Person.prototype.walk = function () {console.log(this.name + " is walking!");}
Person.prototype.citizen = 'India';
Person.prototype.eat = function () {console.log(this.name + " is eating!");}

//now let's create an instance of Person constructor
var person1 = new Person('Shubham');

//now person1 will have access to all the properties and methods which are in Person.prototype object.
person1.walk()
person1.eat()
console.log(person1.citizen);


/*
So now you must be wondering how we are able to acccess properties and methods of Person.prototype ?

It's actually prototype chain Woooo!
let's see what person1 actually is ..
*/

console.log(person1) // {name: Shubham}
/*
It's saying person1 has only 1 property which is name. So what's happening here ?
As I mentioned earlier every object has a __proto__ link, which links to the prototype of the constructor
function from which it has been created.
So according to this definition person1 should also have a __proto__ link which will be pointing to prototype object of Person constructor.

Let's see.. 
*/

console.log(person1.__proto__); // {walk: [Function], citizen: 'India', eat: [Function]}

/*
Oh yes, it's actually returning an object in which we've added properties earlier (ie Person.prototype)
I hope it's clear so far!
*/



