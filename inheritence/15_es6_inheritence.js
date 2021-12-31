class Character {

    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    //these properties will be defined in prototype of the Character (behind the scenes :P)
    attack() {
        console.log(`${this.name} attacked using ${this.weapon}`)
    }
};

class Shaktiman extends Character {
    constructor(name, weapon, suitColor) {
        super(name, weapon)
        this.suitColor = suitColor;
    }
    fly() {
        console.log("Shaktiman is flying!");
    }
}

var s1 = new Shaktiman('Shubham', 'AK-47', 'Red')
console.log(s1)