/*
What are primitives ?
Primitives are basically fundamental data types which are not object and doesn't have any property or method.
*/

var str = "Shubham"
console.log(typeof str) //string

//which is correct 'cause "Shubham" is a string . But an interesting things here

console.log(str.toUpperCase())
//here we are able to use methods in primitive also , Holy Shit !
/*
How is that possible ? Let's see what's going behind the scene ..

-> In javascript every primitive's (except null and undefined) wrapper function constructor (special object) is already defined.
-> In case of string wrapper function constructor is String(). Other object wrappers are Number(), Boolean(). All wrappers have useful 
   methods and properties for respective primitives(eg toUpperCase(), toLowerCase()..)
-> Whenever we try to access any property of method on any primitive, javascript creates a temporary object using the respective
   object constructor with that value (new String('Shubham')).
-> Then it does the job (access the object or properties), After that javascript destroys that object
*/
var s = "Manisha"
console.log(s.toLowerCase())
/*
What's happening in this line : => 

1. s is primitive which has a value 'Manisha'
2. We are trying to access some method/property in that primitive
3. Javascript implicitly creates an object using typeof s wrapper constructor (which is String)
4. var newObj = String(s);
5. Now Javascript checks if there is any method as toLowerCase() 
6. It doesn't find any such method, because String() objects are defined like : 
   newObj {0: "M",
           1: "a",
           2: "n",
           3: "i",
           4: "s",
           5: "h",
           6: "a",
           length: 7,
           __proto__: String.prototype}
7. Now it goes up the prototype chain to find .toLowerCase method 
8. And it finds the method, javascript runs the method and returns string in lower case
9. Immidiately after returning (doing the job) it destroys newObj
10.That's it :)
*/


