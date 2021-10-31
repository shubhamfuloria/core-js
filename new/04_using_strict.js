var Person = function (firstName, lastName) {

    'use strict'

    this.firstName = firstName;
    this.lastName = lastName;

}

/*
when strict mode is enabled this points to undefined instead of pointing to global object.
*/

const shub = new Person("Shubham", 'Fuloria')
