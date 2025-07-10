




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
welcome("broooo"); // "broo" is an argument, "person" is a parameter

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


// higher order function khelaye ga

//aik yeah tarkika hai 
function abcd(v){

}

abcd(function(){
  
})

// //dosra trakia
function bcde(){
  return function(){

  }
}


bcde();

// or agar yeah dono hou bhe tou yeah higher order fnc khelaye ga



// pure function 

let a = 12;
function bfe(){
  console.log("broo")
}
bfe();

// impure function

let b = 14;
function grte(){
  b++
}
grte();


// cloures 

function abcde(){
  let a = 12;
  return function(){
    console.log(a);
  }
};

// this whole is called is cloures


// lexical scoping 

function abcd(){
  let a = 12;

  function efg(){
    let b = 34;

    function hijk(){
      let c = 56;
    }
  }


  //questions
function getscore(...scores){
    let total = 0;    
    scores.forEach(function(val){
        total = total + val

        
    })

    return total;
}

 console.log(getscore(10, 25, 50 , 40 ));


// question 2
function checkage(age){
    if(age< 18) return "too young"
    return "Allowed"
}

console.log(checkage(16))

/ question 3
let a = function(){
    console.log("hehehehe")
}

a();


// question 4

function abcd(val){
    val()
}
abcd(function(){
    console.log("hey heye hey")
})

// question iffe
(function init(){
    console.log("heheheheh")
})();

practice session
BMI Calculator

function bmi(wight, hight){
     return wight / (hight*hight)
}

 console.log(bmi(69, 1.6).toFixed(2));


// reusable discount calcultor

function discountcalculator(discount){
    return function(price){
        return price - price * (discount / 100)
    }
}

let ten =  discountcalculator(10)
let twenty =  discountcalculator(20)

 console.log(ten(2400));


(function(){
    const password = "secret password"
   
})();





