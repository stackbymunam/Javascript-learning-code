let a = prompt("enter the first number");

let b = prompt("enter the second number");

if(isNaN(a)  || isNaN(b)){
    throw SyntaxError("sorry bro its not allowed");
}

let sum = parseInt(a) + parseInt(b)
 let x = 1;

function main(){

    try {
        console.log("the sum is ", sum*x)
    } catch (error) {
        console,log("error is coming")
    }
    
    finally{
        console.log("file are being closed now go to your home");
    }
}

let c = main

console.log("code is running")