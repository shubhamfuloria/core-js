//Date object to have a new method .lastYear() which shows you last year in 'YYYY' format

var date = new Date('1900-10-10');
Date.prototype.lastYear = function() {
    let year = this.getFullYear();
    return year - 1;
}

console.log(date.lastYear())

//make the array map mehtod to print a map emoji after every element of array

function fun(e) {
    return e.toString() + '🗺️'; 
}

var array = [1, 2, 3];
let newArray = array.map(fun);

console.log(newArray)