
const wizard = {
    name: "Merlin",
    health: 80,
    heal(power = 0) {
        console.log(this.name + ": Health Before healing: ", this.health);
        this.health += power;
        console.log(this.name + ": Health after healing : ", this.health);
    }
}

const archer = {
    name: "Shubham",
    health: 50,
}

//I want to use wizard's heal method for my archer object

let archerHeal = wizard.heal.bind(archer, 15);

archerHeal()
archerHeal();
archerHeal();

/* 
*/