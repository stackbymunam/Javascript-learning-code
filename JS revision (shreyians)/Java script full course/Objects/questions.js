
// biggener questions
//question 1 - Write a for loop that prints numbers 1 to 5
for(let i = 1; i < 6; i++){
    console.log(i)
}

// question 2 - How do you write a while loop?
let i = 1;
while(i < 11){
    console.log(i)
    i++
}

// question 3 What is the difference between for and do...while loops
// for loop start if the condition we gave is true and do while loop atleast execute one time 

// question 4 How do you loop through all elements in an array?
// using foreach
let arr = [1,2,4,5,6,7,8,9,10];
 let newarr = arr.forEach(function(val){
    if(val % 2 === 0){
        console.log(val)
    }
})


// question 5  What does the break statement do inside a loop?

// it exit loop immedailty

// intermediat question 

// question 1  Write a loop that sums all numbers in an array.
let sum = 0;
for(let i = 1; i< 101; i++){
    sum = sum + i
};
console.log(sum)

// question 2  How do you use for...in and for...of loops?
// for in
let user = {
    name:  "munam",
    age: 16
}
for(let key in user){
    console.log(key)
}
// for of loop
// for(let char in shyreyanis){
    // console.log(null)
// };
// use with iterable data

// question 3 - Write code to print all properties of an object using a loop
let obj = {
    name: "Munam",
    id: 2345,
    num: 234577
} 
for(let key in obj){
  console.log(key, obj)
};

// question 4 - How do you use nested loops? Give an example.
// we use nested loop for repetative task 

// for(let i = 1; i<101; i++){
//     console.log(i)

//     for(let x = 1 ; x<101; i++){
//         console.log(x)
//     }

//     console.log(x,i)
// }

// question 5  What is the difference between forEach and map?
// for each add function to every val of an original array  and it dont return the val
// map() return a value and make the new function on the baes of original data of an array

// advance question 

// question 1 Why is forEach not suitable for asynchronous operations? Explain.

// foreach is not suitable for asyncronus because it does not wait for the function to reslove 

// question 2  How do you break out of multiple nested loops?
 // using break


 // question 3 How would you flatten a 2D array using loops (pending)
let matrix = [
  [1, 2, 3],   // row 0
  [4, 5, 6],   // row 1
  [7, 8, 9]    // row 2
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("Element at [" + i + "][" + j + "] = " + matrix[i][j]);
  }
}

// question 4 - How can you create a custom iterator for an object? (pending);

// question 5 - Explain the concept of tail recursion in loops.

// tail recursion means where func call start ends there 




