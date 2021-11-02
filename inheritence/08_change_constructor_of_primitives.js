//What if I change the constructor of primitive ?

var str = "Pinki";
console.log(str.constructor) // String() as expected
//now lets change the constructor of str object
str.constructor = Number //which is Number.prototype.constructor

//now lets see what's the constructor of str

console.log(str.constructor); //String() WTF ?

/*
I changed the constructor to Number but it's still String().. How ?

in first instance console.log(str.constructor)
javascript created an temporary object using [tempObj = new String(str)], then printed it's constructor which will be in String.prototype
then destroyed the constructor immediately.

in second instance str.constructor = Number
javascript created a temporary object using [tempObj = new String(str)], then assigned Number function to the constructor of str, then destroyed the
tempObj immediately


in third instance console.log(str.constructor)
javascript again created a temporary object using [tempObj = new string(str)], then printed the constructor , which will be in String.prototype.


From here we can conclude if we add any property to any primitive a temporary object will be created and the property will be added to object
and after that the object will be destroyed, so it will have no effect. We can not access that property again. See the example 
If we try to access that property it will show undefined.
*/

var s = "Shubham"
s.hi = "Hello"

console.log(s.hi); //undefined


//one can not change constructor property of primitives