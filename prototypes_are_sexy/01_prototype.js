function Person(first, last, age, gender, interests) {
    this.name = {

        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

let person1 = new Person('Shubham', 'Fuloria', 20, 'Male', ['Programming', 'Books', 'Cricket']);

console.log(person1);


/*
person1  ==>  Person  ==>  Object  ==>  null  

*/