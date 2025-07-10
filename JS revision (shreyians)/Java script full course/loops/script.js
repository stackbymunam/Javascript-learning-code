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


// question 3

    for(let i = 1; i<21; i++ ){
        if(i % 2 === 0){
            console.log(i)
        };
    };


// question 4


let i = 1;
while (i<16) {
    if(i % 2 === 1){
        console.log(i)
    };
};

// question 5

for(let i = 1; i<11; i++){
    console.log(` 5 x ${i} = ${5 * i}`);
}

// question 6

let sum = 0;
for(let i = 1; i<101; i++){
    sum = sum + i
}
console.log(sum)

// question 7

for(let i = 1; i<51; i++){
   if(i%3 === 0){
    console.log(i)
   }
}


// question 8
let val = prompt("gave the number")
 
 for(let i = 1; i<=val; i++){
    if(i % 2 === 0){
        console.log(`${i} this is an even`)
    }
    else{
        console.log(`${i} this is an odd`)
    }
 }

// // question 9 ✅ DONE BY MY OWN

for(let i = 1; i<101; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i)
    }
}

// question related to break and continue

// question 1

for(let i = 1; i<101; i++){
        console.log(i)
    if(i % 7 === 0){
        break
    }
}


// question 2 ✅ done by me own

for(let i = 1; i<21; i++){
    if(i % 3 === 0){
        continue 
    }
    console.log(i)
}

///question 3

let count = 0
for(let i = 1 ; i < 101; i++){
    if( i % 2 === 1){
        count++
        console.log(i)
    }

    if (count === 5) break

}



//mine pracitce question
//  question 1
for(let i = 1; i<11; i++){
    console.log(i)
}

// question 2
for(let i = 1; i< 51 ; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// question 3
sum = 0;
for(let i = 1; i<101; i++){
    sum = sum + i
}
console.log(sum)

// question 4
for(let i = 1; i < 11; i++){
    console.log(`7 x ${i} = ${i * 7}`)
}

// question 5
 let number = 5;
 let factorial = 1; 
 for(let i = 1; i<=5;i++){
    number = number * i
 }
 console.log(number)

// question 6
    for(let i = 1 ; i<101; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i)
        }
    }


    // while loop question





// question 1
let i = 1;
while(i <= 100){
    console.log(i);
    i++
}





