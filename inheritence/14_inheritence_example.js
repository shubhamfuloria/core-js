function Animal (name, age) {
 	this.name = name;
  this.age = age;
}

Animal.prototype.eat = function() {
	return `${this.name} is eating.`
}

function Human(name, age, salary) {
  Animal.call(this, name, age);
  this.salary = salary;
}
Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human

function Boy(name, age, salary, sport) {
  Human.call(this, name, age, salary);
  this.sport = sport;
}
Boy.prototype = Object.create(Human.prototype);
Boy.prototype.constructor = Boy

var b1 = new Boy("Naman", 20, 200000, 'Football');

b1.eat()

