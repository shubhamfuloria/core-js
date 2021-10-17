/*
:this keyword returns which object called it

this keyword is dynamically scoped unlike other variables in JS which are lexically scoped .

Lexical Scope : Where the function is defined in the source code, no matter where it's being called.
Dyanmic Scope : Where the function is called, no matter where it's beging defined. 

*/
_____________________________________________________________________

var a = function () {
    console.log("A: ", this); //this keyword is window here 
    var b = function() {
        console.log("B: ", this); //this keyword is also window here
        var c = {
            hi : function () {
                console.log("C: ", this); //this keyword is  pointing to object c here , cause we are writing this inside c object.
            }
        }
        c.hi();
    }
    b();
}
a();

_____________________________________________________________________

const obj = {
    name : "Pinky",
    sing : function () {
        console.log("Sing: ", this);
        function innerFunc() {
            console.log("Inner: ", this);
        }
        innerFunc();
    }
}
/*
Inner this is also inside obj but still it's refering to window.
Reason: obj didn't actually call innerFun(). innerFunc() is called by sing(). Javascript default this value is window object, so it's refereing to window.

*/



______________________________________________________________________

/* In javascript  our lexical scope (available data + variables where the function was defined) determines our available variable. Not where the function is called (dynamic scope).

*/