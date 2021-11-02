/*
Here we will see 4 ways of manipulating this keyword
*/

//new binding

function Person(name, age) {
    this.name  = name;
    this.age = age;
}

const person1 = new Person('Shubham', 20);
console.log(person1)
/*
Whenever we use new keyword with a function call, the function acts as a constructor .
The constructor function creates an empty object.
Binds this keyword with this empty object.
sets all the properties .
returns the object (without any return statement)
*/

//implicit binding

const person2 = {
    name: 'Pinki',
    age : 20,
    greet : function () {
        console.log('Hello, ' + this.name);
    }
}
person2.greet();


//in this case in all the first level innner function of person2 object this will point to outer object ie person2


//explicit binding
const name = 'Vinita'

const person3 = {
    name: 'Manisha',
    age: 20,
    greet : function() {
        console.log('Hello, ' + this.name);
    }.bind(global)
}

person3.greet();

//arrow function 

const person4 = {
    name : 'Monika',
    age: 20,
    greet : function() {

        var inner = () => {
            console.log("Hello, " + this.name);
        }
        inner();
    }
}

person4.greet();
