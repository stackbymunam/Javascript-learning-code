let a = [36,55,52,78,94,23,66,881,4,7,2,3,5,7];

 let sr = a.sort(function(a,b){
    return a - b
})
console.log(sr)
if a-b so it gave assecding order if b - a  so it gave decesending order

//forEach
let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach(function(val){
    console.log(val+5)
})

// map()
let arr = [2,3,4,5.6,7,8,9,10];
 let newarr = arr.map(function(val){
    return 12;
});
console.log(newarr)


//filter
let arr = [1,2,3,4,5,6,7,8,9,10];

 let newarr = arr.filter(function(val){
    if(val > 4) return true
});


//reduce

let arr = [1,2,3,4,5,6,7,8,9,10];
 let newarr = arr.reduce(function(accumlator, val){
    return accumlator + val
},0);


//some
let scorecard = [20, 30, 50 ,80];

 let newscorecard = scorecard.some(function(val){
    return val >50;
})


// every
let scorecard = [20, 30, 50 ,80];

 let newscorecard = scorecard.every(function(val){
    return val > 30;
})




//Destruchring
//koi bhe array mai sai value nikal ke ose dosre variable mai store karne kou destrucring kehte 
let arr = [1,2,3,4,5,6,7,8];
let   [a,b,, c] = arr


//spread
let arr = [1,2,4,5,6,7,8];
let newarr = [...arr];



//Questions
// first question
let fruits = ["mango", "banana", "stawberry"];
console.log(fruits[1]);

//second question
let fruits = ["mango", "banana", "stawberry"];
fruits.push("Mangox2");
fruits.unshift("pinapple")
console.log(fruits);

//third question
let fruits = ["apple", "Banana"];
fruits.pop()
fruits.push("kiwi")
console.log(fruits)

//question four
let numbers  = [1,2,4,5,6,];
numbers.pop();

//question 6
// we can use splice also for adding things
let colours = ["green", "yellow"];
colours.splice(1,0, "red", "green");
console.log(colours)


//question 7
let items = [1,2,3,4,5,6];
 let newitems = items.slice(2,5);
 console.log(newitems)

// question 8
let names = ["zara", "arjun", "Mira", "bhavaya"];
names.sort().reverse()
console.log(names);


//question 9
let arr = [1,2,3,4,];
 let newarr = arr.map(function(val){
    return val*val
})
console.log(newarr)

//question 10
let arr = [5,12,8,20,3];
 let newarr = arr.filter(function(val){
    if(val > 10) return true
});

console.log(newarr);


//question 11

let arr = [10,20,30];
let newarr = arr.reduce(function(accumlator, val){
    return accumlator + val
},0);

console.log(newarr)

//question 12
let arr = [12,15,3,8,20];
let newarr = arr.find(function(val){
    return val < 10
})
console.log(newarr)

//question 13
let arr = [45,60,28,90];
let newarr = arr.some(function(val){
     if(val < 35) return true
})

console.log(newarr)

//question 14
let even = [2,4,6,8,10];
let neweven = even.every(function(val){
    return val%2 === 0
})
console.log(neweven)

//question 15

let fullname = ["harsh", "sharma"];
let startname = [a, b] = fullname;
console.log(a)
console.log(b)

//question 16


