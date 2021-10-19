/*
We're able to achieve prototypical inheritence using __proto__ property , but due to performance reasons we should never use it . 
That's why they named it wierd.

There are more ways to achieve the same without using __proto__
*/

var human = {
    walk() {
        console.log(this.name + " is Walking..");
    }
}

var girl = Object.create(human); //by doing this we'll access to all the properties of human in girl object

girl.name = "Tirtha";


girl.walk();

/*
So here we inherited all the properties of human in girl object without using __proto__


*/