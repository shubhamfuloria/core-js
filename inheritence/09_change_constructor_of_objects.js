//we can easily change the constructor property of objects

function Person(name) {
    this.name = name;
}

var person1 = new Person("Shubham")
console.log(person1.constructor) //Person

// what if I change the constructor function of Person which is present in
//Person.prototype.constructor ?
//let's see..
function AnotherPerson(age) {
    this.age = age;
}

Person.prototype.constructor = AnotherPerson;
console.log(Person.prototype.constructor) //AnotherPerson
/*
As we have changed the constructor function of Person.
Now, new instances of person should use AnotherPerson to create themselves

Let's see..
*/

var person2 = new Person(20)
console.log(person2) //{name : 20} WTF? 

/*
It's returning name property so it is object of original Person() 
let's see the constructor property of person2
*/

console.log(person2.constructor) //which is AnotherPerson 


/*
What's going on ? 
This is how it works:


-> Every function has a constructor property in it's prototype object.
-> This constructor property is just a pointer to the actaul function.
-> This constructor property is only for instances, so that instances can detect their constructor function via this constructor pointer.
-> If we change the constructor reference of <function>.prototype, it doesn't actually alter the new objects create.
-> If we create new object from a function, it doesn't actually use <function>.prototype.constructor to create objects.
-> It uses <function> itself as the constructor function.
-> The <function>.prototype.constructor property is just a reference to funciton itself only for instances to detect their creator.
*/



console.log(person2.constructor === AnotherPerson) //true
console.log(person2.constructor === Person) //false
console.log(person1.constructor === Person) //false
console.log(person1.constructor === AnotherPerson) //true

/*
Which is obvious, the actual Person.prototype.constructor has been changed to AnotherPerson , which was initially pointing to Person itself.

But it is just a reference, New objects will be created using Person only.
Although if we check the constructor of object it will show AnotherPerson

Hope it makes sense.
*/