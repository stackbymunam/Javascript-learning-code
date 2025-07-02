// 1. Arithmetic Operators (+, -, *, /, %)
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);  // 13
console.log("a - b =", a - b);  // 7
console.log("a * b =", a * b);  // 30
console.log("a / b =", a / b);  // 3.33...
console.log("a % b =", a % b);  // 1 (remainder)

// 2. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
console.log("\nComparison Operators:");
console.log("a == '10' :", a == '10');     // true (loose equality)
console.log("a === '10' :", a === '10');   // false (strict equality)
console.log("a != b :", a != b);           // true
console.log("a !== b :", a !== b);         // true
console.log("a > b :", a > b);             // true
console.log("a < b :", a < b);             // false
console.log("a >= b :", a >= b);           // true
console.log("a <= b :", a <= b);           // false

// 3. Logical Operators (&&, ||, !)
let x = true;
let y = false;

console.log("\nLogical Operators:");
console.log("x && y :", x && y);   // false
console.log("x || y :", x || y);   // true
console.log("!x :", !x);           // false

// 4. Assignment Operators (=, +=, -=, *=, /=, %=)
let num = 5;

console.log("\nAssignment Operators:");
num += 2;  // num = num + 2
console.log("num += 2:", num);     // 7

num -= 1;  // num = num - 1
console.log("num -= 1:", num);     // 6

num *= 3;
console.log("num *= 3:", num);     // 18

num /= 2;
console.log("num /= 2:", num);     // 9

num %= 4;
console.log("num %= 4:", num);     // 1

// 5. Unary Operators (+, -, typeof, !)
let str = "100";
let bool = false;

console.log("\nUnary Operators:");
console.log("+str:", +str);           // 100 (convert to number)
console.log("-str:", -str);           // -100
console.log("typeof str:", typeof str); // string
console.log("!bool:", !bool);         // true

// 6. Ternary Operator (condition ? value1 : value2)
let age = 20;
let canDrive = age >= 18 ? "Yes" : "No";

console.log("\nTernary Operator:");
console.log("Can drive? ", canDrive);  // Yes

// 7. Increment and Decrement Operators (++ and --)
let count = 5;

console.log("\nIncrement / Decrement:");
console.log("count++:", count++);  // 5 (then becomes 6)
console.log("After count++:", count);  // 6

console.log("++count:", ++count);  // 7 (pre-increment)

console.log("count--:", count--);  // 7 (then becomes 6)
console.log("After count--:", count);  // 6

console.log("--count:", --count);  // 5 (pre-decrement)
