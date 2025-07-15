// begginer question
// Question 1 - How do you create an array of fruits in JavaScript?
let fruits = ["mango", "grapes", "Banana"];
console.log(fruits);

// question 2  How can you access the last element of an array?
// just see how many elemnts  in the array and saw the index and acces it
fruits[2];

// question 3  How do you change the value of the second element in an array?
// we use splice for it
let fruits2 = ["mango", "grapes", "Banana"];
 fruits2.splice(0,1);

//  question 4  What is the length property of an array used for?
fruits.length

// question 5  How can you loop through every item in an array?
// we use foreach for that
 let arr = [1,2,3,4,5 , "Munam ", "bal la"];
 arr.forEach(function(val){
    console.log(arr)
 })

 // intermediat question 

//  question 1 How do you add and remove elements at the start of an array?
//  for that we use shift for that
let arrint = [1,2,3,4,5,6,7,8];
arrint.shift()

// question 2  Write a function that reverses an array.
function reversearr(){
    let arrfunc = [2,4,6,8,10];
    return arrfunc.reverse() 
}
 console.log(reversearr())


 // question 3 How would you find the index of a value in an array?
 // i just count that like it start from zero so i just start counting from zero
 console.log(arrint[4]);

 // question 4  What does the slice() method do? Give an example.
 // like splice cut the array from the middle and slice also cut the array but i dont modify the orignal array 
 let cutarr = arrint.slice(2,5)
 console.log(cutarr);

 // question 5 How do you combine two arrays into one?
//  by using  rest operater
let firstarr = [1,2,3,4,5];
let secarr = [6,7,8,9,10];
let mergearr = [...firstarr, ...secarr];
console.log(mergearr)


// advance questions

// question 1 How would you filter unique values from an array?
// through filter property
let filarr = [1,2,3,4,5,6,7,8,9,10];
 let newfilarr = filarr.filter(function(val){
    if(val % 2 === 0) return val;
})
console.log(newfilarr);


// question 2  Explain and implement the concept of a multidimensional array.
// a multidimensinaol array is when you have a array and in that array you have more arrays
let multiarr = [1,2,3,4,5,6,7
    ["munam", "broo", "etc"],
    ["Harsh "]
];

// question 3  How can you flatten an array of arrays into a single array?
let flarr = [1,2,4,5,6,7,8,9,10 ];
 let newflarr = flarr.reduce(function(accumaltor, val){
    return accumaltor + val
},0)
console.log(newflarr)

// question 4 Write a function to find the intersection of two arrays. (pending)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
function intersection(arr1,arr2) {
    return arr1.filter(item => arr2.includes(item))
};
 
// question 5  Implement a custom map function for arrays.
let member = [];


