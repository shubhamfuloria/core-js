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
So we want all the instances of Human should have access to all the properties and method
of Animal's prototype

We can simply add Animal.prototype into the prototype chain of Human
*/

Human.prototype.__proto__ = Animal.prototype
var shubham = new Human('Shubham');
/*
Now our prototype chain of shubham should look like : 

shubham ---__proto__---> Human.prototype---__proto__---> Animal.prototype--->__proto__---> Object.prototype---__proto__---> null
now shubham object should have access to canRun() function
*/

shubham.canRun() //Yes, Shubham can run :)
shubham.canEarn()//Yes, Shubahm can Earn :)

//This is how we can achieve inheritence in javascript constructor 
//In some browsers .__proto__ prooperty is not supported 
//We'll use Object.create for that (next code)