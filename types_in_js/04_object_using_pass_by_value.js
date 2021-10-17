//when we want to pass the object by value, not by the reference (we want to copy the object)

var arr = [1, 2, 3]; //array is an object
var clone_arr = [].concat(arr);

clone_arr.push(1000);

console.log(arr);
console.log(clone_arr);

//in case of objects other than array

var obj = {
    a : 'a',
    b : 'b'
}

var clone_obj = Object.assign({}, obj);

clone_obj.a = 5;

console.log(obj);
console.log(clone_obj);


//there are more techniques for doing the same
