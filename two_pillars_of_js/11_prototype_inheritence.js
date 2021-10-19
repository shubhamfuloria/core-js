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

console.log(lizard.fire);
lizard.sing();
dragon.sing();
lizard.fight();
dragon.fight();

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));

/*
Here lizard is inheriting all the properties of dragon, as we've added dragon in lizard's prototype chain.
Now lizard have access to all the properties and methods of dragon. This is called prototype inheritence.
*/