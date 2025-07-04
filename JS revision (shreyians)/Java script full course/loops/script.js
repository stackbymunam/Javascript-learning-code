// FOR LOOP example
console.log("=== For Loop ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3 using continue");
        continue; // skips the rest of the loop for i === 3
    }
    console.log("Number:", i);
}

// WHILE LOOP example
console.log("\n=== While Loop ===");
let j = 1;
while (j <= 5) {
    if (j === 4) {
        console.log("Breaking at 4");
        break; // stops the loop completely when j === 4
    }
    console.log("Count:", j);
    j++;
}

// DO...WHILE LOOP example
console.log("\n=== Do While Loop ===");
let k = 1;
do {
    console.log("Value:", k);
    k++;
} while (k <= 3);









// question 1

for(let i = 1 ; i<11; i++){
    console.log(i)
};


// question 2

 let i = 10;
 while(i > 0){
    console.log(i)
    i--
 }


//question 3



