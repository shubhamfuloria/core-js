/*
this is the keyword in javascript which refers to the current object.
there are two main uses of this keyword
1. Gives method access to their Objects
2. We can use same code for multiple objects
*/

//1. Gives method access to their Objects
var nam = "Urvashi";
var obj = {
    nam: "Shubham",
    greet() {
        console.log(`Hello ${this.nam}`);
    },
};

obj.greet();

//2. using the same code for multiple objects

function greet() {
    console.log("Hello, " + this.nam);
}

var obj1 = {
    nam: "Vinita",
    greet: greet,
};

var obj2 = {
    nam: "Pinky",
    greet: greet,
};

obj1.greet();
obj2.greet();
greet(); // I don't know why it's printing undefined
