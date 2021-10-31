function CreateArmy(name, weapon) {
    console.log(this);
    this.name = name;
    this.weapon = weapon;
    console.log(this);
}

CreateArmy.prototype.attack = function () {
    console.log(`${this.name} attacked using ${this.weapon}`);
}

let shubham = new CreateArmy('Shubham', 'AK-47');
let aditya = new CreateArmy('Aditya', 'Machine Gun');
let manisha = new CreateArmy('Manisha', 'Jet');

shubham.attack();
manisha.attack();
aditya.attack();

/*
This is how we create objects using constructor functions.
If we call the constructor function without new keyword, then it's not a constructor function.
Then it will not return any object, and this will point to global object.



But with new keyword it instantly creates a new object and this points to the newly created object, and it sets all the properties
and returns this object.

We can add additional properties to prototype of constructor, these properties will be shared among all the instances.

It is conventional to capitalize first letter of every constructor

*/
