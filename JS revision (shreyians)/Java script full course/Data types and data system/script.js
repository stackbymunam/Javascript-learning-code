// PRIMITIVE DATA TYPES
let a = 10;
let b = a; // b is a copy of a

console.log(a); // 10
console.log(b); // 10

b = 20; // change b, a remains unchanged

console.log(a); // 10 (still same)
console.log(b); // 20



// REFERENCE DATA TYPES
let obj1 = { name: "Ali" };
let obj2 = obj1; // obj2 points to the same object

console.log(obj1.name); // Ali
console.log(obj2.name); // Ali

obj2.name = "Ahmed"; // change through obj2

console.log(obj1.name); // Ahmed (also changed!)
console.log(obj2.name); // Ahmed




