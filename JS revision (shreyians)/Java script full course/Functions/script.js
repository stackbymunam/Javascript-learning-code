




// ✅ Function Declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Mustafa"); // "Mustafa" is an argument

// ✅ Function Expression
const sayBye = function(name) {
  console.log("Goodbye, " + name + "!");
};
sayBye("Ali");

// ✅ Parameters and Arguments
function welcome(person) {
  console.log("Welcome, " + person + "!");
}
welcome("Ayesha"); // "Ayesha" is an argument, "person" is a parameter

// ✅ Default Parameters
function multiply(a, b = 2) {
  console.log("a:", a, "b:", b);
  return a * b;
}
console.log("multiply(5):", multiply(5));    // Uses default b = 2 => 10
console.log("multiply(5, 3):", multiply(5, 3)); // 15

// ✅ Rest Parameters
function sumAll(...numbers) {
  console.log("All numbers:", numbers);
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log("sumAll(1, 2, 3):", sumAll(1, 2, 3));           // 6
console.log("sumAll(5, 10, 15, 20):", sumAll(5, 10, 15, 20)); // 50

