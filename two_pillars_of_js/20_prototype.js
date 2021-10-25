function Student() {
    this.name = 'Shubham';
    this.gender = 'Male'
}

var obj1 = new Student();
//now I want to attatch a new property age into this instance
obj1.age = 20;
console.log(obj1);

var obj2 = new Student();
console.log(obj2);
//this instance will not have an age property

//so if we want to add new properties at later stage to function
//which will be shared across all the instaces => prototype

Student.prototype.age = 20;


var obj3 = new Student();
console.log(obj3.age); //age will be 20

//prototype property is shared among all the instances of that constructor

/*
VERY IMPORTANT PROTOTYPE:

1. Every function has a prototype object by default.
2. Additional properties can be attatched to it this prototype object, which will be shared across all the instances of it's constructor function.
3. Every Object created using literal syntax or constructor with new keyword, includes a __proto__ property that points to prototype object of that function which created this object.



*/