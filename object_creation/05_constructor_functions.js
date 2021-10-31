function CreateArmy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

let shubham = new CreateArmy('Shubham', 'AK-47');

console.log(shubham.__proto__);

CreateArmy.prototype.attack = function () {
    console.log(`${this.name} attacked using ${this.weapon}`);
}

let aditya = new CreateArmy('Aditya', 'Machine Gun');

console.log(aditya.__proto__);

let manisha = new CreateArmy('Manisha', 'Jet');

shubham.attack();
manisha.attack();
aditya.attack();