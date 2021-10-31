function CreateArmy(name, weapon) {
    console.log(this);
    this.name = name;
    this.weapon = weapon;
    console.log(this);
}

console.log(CreateArmy.__proto__);

CreateArmy.prototype.attack = function () {
    console.log(`${this.name} attacked using ${this.weapon}`);
}


const shubham = new CreateArmy('Shubham', 'AK-47');

/*
Notice the this keyword before and after adding properties

*/