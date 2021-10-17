function multiply (a, b) {
    console.log(a * b);
}

var multiplyByTwo = multiply.bind(this, 2);
var multiplyByTen = multiply.bind(this, 10);


multiplyByTwo(5);
multiplyByTen(10);ls