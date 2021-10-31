/*
To overcome the problem we saw in last section we have Object.create method

What Object.create() does is:
let obj = Object.create(x)

It creates a __proto__ link between x and obj
now we can say the prototype of obj is x
*/

const armyFunctions = {
    attack() {
        console.log(`${this.name} attacked using ${this.weapon}`);
    }
}
function createArmy(name, weapon) {

    let newArmy = Object.create(armyFunctions);
    newArmy.name = name;
    newArmy.weapon = weapon;

    return newArmy;
}


const shub = createArmy('Shubham', 'AK-47');
shub.attack();
const adi = createArmy('Aditya', 'Machine Gun');
adi.attack();



