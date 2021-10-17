/*
Every funciton have call mehod in it's prototype(we will learn about it later), which is used to invoke that function 
*/

function A() {
    console.log("Function A is ruuning");
}

//A(); //this is just short-hand for A.call()
//A.call(); //we are using call
//A.apply();

//________________________________________________________________

const wizard = {
    name: "Merlin",
    health: 80,
    heal(power = 0) {
        console.log(this.name + ": Health Before healing: ", this.health);
        this.health += power;
        console.log(this.name + ": Health after healing : ", this.health);
    }
}

wizard.heal();

const archer = {
    name: "Shubham",
    health: 50,
}

//I want to use wizard's heal method for my archer object

wizard.heal.call(archer, 15);
wizard.heal.apply(archer, [15]);

/*
apply() works same as call() but takes arguments in the form of array 
*/