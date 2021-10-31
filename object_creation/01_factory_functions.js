//factory functions


function createArmy(name, weapon) {

    return {
        name,
        weapon,
        attack() {
            console.log(`${this.name} attacked using ${this.weapon}`);
        }
    }
}

let ninza = createArmy("Shubham", "AK-47");
let adi = createArmy("Aditya", "Machine Gun");
let naman = createArmy("Naman", "Stones");
let aman = createArmy("Aman", "Hocky");

ninza.attack();
adi.attack();
naman.attack();
aman.attack();


/*
Probles with factory functions:
although attack functionality is same for all the 4 object
still we have to make copy of attack() separate for each object
so it's not memory efficient.


*/