/*
Inheritence without using .__proro__
*/

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.canRun = function() {
    console.log(`Yes, ${this.name} can run :)`);
}

function Human(name, age, money) {
    Animal.call(this, name, age)
    this.money = money;
}
Human.prototype.canEarn = function() {
    console.log(`Yes, ${this.name} can Earn :)`)
}

/*
We want all instances of Human should have access to all the methods/properties which are defined in Animal.prototype
So we can create an empty object with __proto__ link to Animal.prototype using Object.create() function
and we can simply asssign this new object to Human.prototype
Then our prototype chain will look like : 
*/

Human.prototype = Object.create(Animal.prototype);
//we have to do this again . Think why ?
Human.prototype.canEarn = function() {
    console.log(`Yes, ${this.name} can Earn :)`)
}

//now all instances of Human should have access to Animal.prototype
var shubham = new Human('Shubham', 20, 100000);
shubham.canRun() //Yes, Shubham can run :)
shubham.canEarn() //Yes, Shubham can earn :)

/*
Now one problem is here..
As we have changed the prototype property fo Human to Animal.prototype
so now all the instances will have constructor property referencing to Animal
let's see..
*/

console.log(shubham.constructor) //Animal

//but actually the constructor is Human, so we have to modify it manually

Human.prototype.constructor = Human //that why we created new Object

/*
If we had just referenced Human.prototype to Person.prototype, all the instances of both functions will have same constructor property
which would be Animal

Hope it makes sense
That's it !
*/


//this is how we prototyal inheritence works, Now we have cleaner es6 syntax which looks good 
//but behind the scene this is happening
