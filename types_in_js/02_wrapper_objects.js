//primitives have an object wrapper

console.log(true.toString());
/* true if of primitive but we are still able to use it as an object */

/*
Whevever we try to acccess any property of a primitve, JS wraps that primitive into it's wrapper which are inbuilt in javascript, every primitive have an wrappr object
so in the above example , behind the scene : javascript will convert true to an object using Boolean wrapper(which is a inbuild method of Javascript)
So it will look like this:

Boolean(true).toString();
*/

console.log(Boolean(true).toString());
