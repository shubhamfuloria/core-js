/*
solution for the this having dynamic scope. I want to make this keyword lexically scoped.

Solution is : Array functions (Arrow functions are lexically bound)
Arrow function have lexical this behaviour.
*/


//Solution 1 : Use arrow funciton (ES6)

const obj = {
    name: "Pinky",
    sing: function () {
        console.log("Sing: ", this);
        innerFunc = () => {
            console.log("Inner: ", this);
        }
        innerFunc();
    }
}

//Solution 2 : Use reference to this

const obj = {
    name: "Pinky",
    sing: function () {
        console.log("Sing: ", this);
        var this_ref = this;
        function innerFunc() {
            console.log("Inner: ", this_ref);
        }
        innerFunc();
    }
}