/*
Things to keep in mind:

1. Every function (callable object) has a prototype object in it's properties
2. In prototype object, every function has a constructor property
4. this constructor property refernces to the function itself [VERY IMPORTANT]
3. Whenever we create any object from a constructor function, the object can access the it's constructor function which is present
   in it's prototype chain (in obj.__proto__.constructor)
   let's see it in example
*/

function Person(name) {
    this.name = name;
}

var person1 = new Person('Shubham');

console.log(person1.__proto__.constructor === Person.prototype.constructor) //true

/*
Hope the above line make sense :
what's happening in the last line is => person1 will have a __proto__ link which will be pointing to Person.prototype. In Person.prototype 
we'll have a constructor function , we're just just comparing the same constructor function from both the ends
*/