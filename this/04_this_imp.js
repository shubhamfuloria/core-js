var b = {
    name: "Pinky",
    say() {
        console.log("B: ", this);
    }
}

b.say() //this will print object b, which is obvious : we are calling say inside of object b.


var c = {
    name: "Urvashi",
    say() {
        return function () {
            console.log("C: ", this);
        }
    }
}

c.say()() // this will print window object, which is because say() is returning a function, which we are running in global scope, so it's printing window

var d = {
    name: "Tirtha",
    say() {
        return () => {
            console.log("D: ", this);
        }
    }
};



d.say()(); //this is same as previous one , but arrow functions are lexically scoped for this keyword,  so no matter where we call the returned function, it will always point to d