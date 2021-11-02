/*
Now let's see what happens when we try to access the cosntructor of primitives in Javascript
*/

var str = "Shubham"
console.log(str.constructor); //[Function: String]

/*
It's returning base String() wrapper function. But how ?

As we try to use any property of primitive(string) using dot(.) operator , javascript  creates an temporary object using (tempObj = new String(str).String() is a constructor function so it'll have a prototype object, a constructor property will be there in prototype object which will be referencing
to String() function itself.

Now javascript checks if tempObj has any property named as constructor ? No it doesn't have
So it goes up the prototype chain (in String.prototype which is str.__proto__) where it finds a constructor property, which will be referencing to 
String() function itself. So it returns that String() function. As soon as after returning it destroys the tempObj
*/