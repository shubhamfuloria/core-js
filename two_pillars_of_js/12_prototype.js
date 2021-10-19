var dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        console.log("Damaged enemy by 5 health");
    },
    sing() {
        if (this.fire) {
            console.log(`I am ${this.name}, the breather of fire.`);
        }
    }
};

var lizard = {
    name: 'Pinki',
    fight() {
        console.log("Damaged enemy by 1 health");
    }
}

lizard.__proto__ = dragon;

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop);
    }
}