//Pass By Value

let a = 5;   //we assigned 5 to a primitive a, now a contains ref to 5 in the memory
let b = a; // 'cause 5 is of primitive type , so it will be passed by value , in this line value of a will be copied to b, now b is also 5;

console.log(a, b);
b++;
console.log(a, b); //a did not changed when I incremented b, because they are refering to different memory location in the memory, they have their own separate copy of 5 



//Pass By Reference

let obj1 = {
    name: "Vinita",
    surname: "Khetwal"
}

/* 
We created an object named obj1 so memory will be given to obj1, and obj1 will have reference to this object in the memory location.
*/

let obj2 = obj1;

/*
When I copied obj1 to obj2, 'cause obj1 is of non primitive type, so it will pass by reference, in this line reference(address) of obj1 will be copied to obj2, actual value is not copied. Both obj1 and obj2 are refering to same memory location. 
*/

console.log(obj2);

obj2.surname = "Fuloria";

console.log(obj2);
console.log(obj1);

//both objects are changed because they were refering to same memory location