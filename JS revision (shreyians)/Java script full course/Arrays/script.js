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

