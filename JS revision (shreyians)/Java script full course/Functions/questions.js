//question 1  Write an if statement that checks if num is greater than 10.

let a = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)

if (a < 10) {
    console.log("you are passed")
}
else {
    console.log("you are fail")
};


// question 2 - What does an else block do in an if-else statement?

// else block do like when this code dont runs and if this value dont be true so run else code

// question 3  How do you write a basic switch statement?
let day = 3;
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;

    case 4:
        console.log("thursday")
        break;

    default:

}

// question 4  What is a ternary operator? Write an example. 
// ternary operator is when we have one true condition and one fale so first we write condition and then  after question mark we wirte the condtion to  do it its true and add semicolon and then write what add if the condtions false;

// question 5 How do you use an if-else to check if a number is even or odd?
// we use modelus for that and we compare that with 0  or 1 if 1 comes so its odd and if 0 comes its even
let num = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
if (num % 2 === 0) {
    console.log("it has even number");
};




// intermdiat questions

//   question 1   How can you use a loop to find the first negative number in an array?
let num1 = [1, 2, 4, 5, 6, -7, 8, 9];
for (let i = 0; i < num1.length; i++) {
    if (num1[i] < 0) {
        console.log("this number is negative")
        break
    }

};

// question 2 What does the break statement do inside a loop?
// its stop the code immedialty for example it we got the negative num so immedaitly stop executing the code



// question 3 - How can you use continue to skip certain iterations in a loop?

for (let i = 0; i < 11; i++) {
    if (i === 3) {
        continue
    }

    console.log(i)


}

// question 4 Convert this if-else statement to a switch statement. 
//   let days = "Monday";

// if (days === "Monday") {
//     console.log("Start of the work week.");
// } else if (days === "Friday") {
//     console.log("End of the work week.");
// } else if (days === "Saturday" || days === "Sunday") {
//     console.log("Weekend!");
// } else {
//     console.log("Midweek day.");
// }

// switch case 
let days = "Monday";
switch ("Monday") {
    case "Monday":
        console.log("Start of the work week.")
        break;

    case "friday":
        console.log("End of the work week.");
        break;

    case "Saturday" || "sunday":
        console.log("Weekend!")
        break;
        default:
}


// question 5  What is fall-through in a switch statement?

// in js when you dont use break in switch case so it excutes the next code no matter its not meet the condition

// advance question

// question 1  How can you use nested control structures? Give an example.
// we can use nested control structers like we have if and in that if we have also have one more if

let id = 2;
if(id < 1){
    if(hasid){
        console.log("brooo")
    }
}
// nested control structers 

// question 2 How do you chain multiple conditions in an if-else block?
// through else if

let driver = 18;
if(driver === 18){
    console.log("you can drive")
}
else if(driver > 18 ){
    console.log("you are deserve to drive")
}
else{
    console.log("you can not drive")
};

// question 3  What is short-circuit evaluation? Explain with an example.

// this mean in logical operator when we know that one value is false 
let loggedout = false;
loggedout && console.log("this is me");






