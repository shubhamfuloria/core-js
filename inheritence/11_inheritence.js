function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.canRun = function() {
    console.log(`Yes, ${this.name} can run :)`);
}

function Human(name, age, money) {
    Animal.call(this, name, age)
    this.money = money;
}
Human.prototype.canEarn = function() {
    console.log(`Yes, ${this.name} can Earn :)`)
}

//let's create a Human and see if it's working ..

var pinki = new Human("Pinki", 20, 100000);
console.log(pinki) //{name: 'Pinki', age: 20, money: 100000}

/*
At first glance you might wonder how it's working ?
What's going on ? But it's simple
Let's see what's going on step by step: 

1. We called Human("Pinki", 20, 100000) with new keyword
2. Because of new keyword, an empty object is created , and value of this keyword will be referencing to the newly created empty object.
3. We are calling Animal constructor with call method, it will call Animal function with this keyword referencing to the same newly created object.
4. We are now in Animal function and this keyword is still referencing to the same empty newly created object
5. this.name = name => adds a property name with value name to the same newly created object.
6. this.age = age => adds a property age with value age to the same newly created object
7. So far our newly created object should look like : 
{name: 'Pinki', age: 20}
8. Animal function ends, Remember it do not return anything.
9. Because objects are pass by reference so, the same object has been altered (added property name and age)
10. this.money = money => adds a property money to the same newly created object. Now it should look like {name: 'Pinki', age: 20, money: 100000}
11. Because we called Human function  with new keyword so it will automatically return the newly created object 
12. And we have the object in pinki variable.
*/

//Are we able to use canRun() function in our pinki object ?
//lets see

pinki.canRun() //canRun is not a function : error

/*
Why it's giving error ?
Because we don't have any canRun funtion in pinki object's prototype chain

pinki object prototype chain should look like this: 
pinki ---  __proto__  ---> Human.prototype -------  __proto__  -----> Object.prototype----  __proto__  ---> null

and canRun function is defined in Animal.prototype

So we need to think a way, so we add Animal.prototype in pinki object prototype chain
Let's think about that in next code
*/
