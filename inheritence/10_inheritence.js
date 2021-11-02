/*
Now we have a good understanding of prototype, __proto__, constructors, constructor functions, functions are objects.. so we can move forward to learn inheritence :)
*/

//lets say we have a Animal constructor function

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.canRun = function() {
    console.log(`Yes, ${this.name} can run :)`);
}

//and we have a Human constructor as well

function Human(name, age, money) {
    this.name = name;
    this.age = age;
    this.money = money;
}
Human.prototype.canEarn = function() {
    console.log(`Yes, ${this.name} can Earn :)`)
}


var tommy = new Animal('Tommy', 10);
console.log(tommy)

var shubham = new Human('Shubham', 20, 9999999)
console.log(shubham)

/*
Human is also a kind of animal, Human has name and age too.
So here we are just writing code twice, we would have just
inherited name and age property from Animal constructor.

But how will we do that ?
just add Person.call(this, name, age) in Human and remove name and age assignment. How this works ?

Let's see in the next code ..
*/