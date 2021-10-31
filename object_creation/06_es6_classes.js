/*
Here we have classes like other languages eg C++, JAVA, C#
Although it's just protypes behind the scene, classes are just a syntactical sugar
*/

class CreateArmy {

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacked using ${this.weapon}`);
    }
}

const shubham = new CreateArmy('Shubham', 'AK-47');
const aditya = new CreateArmy('Aditya', 'Machine Gun');

shubham.attack();
aditya.attack();

console.log(shubham instanceof CreateArmy);

//attack() will be prototype of CreateArmy, so multiple copies of attack won't be created.

/*
1. Each time we create instance of CreateArmy, the constructor function is called
2. New object is created with properties name and weapon
3. If we move attack inside constructor block, then each time a new attack will be created
*/