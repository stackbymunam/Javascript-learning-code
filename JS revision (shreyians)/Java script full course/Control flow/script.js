// if else  else if
//switch case
//early return pattern







Through else if

function getgrade(score) {
    if(score >= 90 && score <= 100){
        return "A+";
    }
    else if(score >= 80 && score <= 89){
        return "A";j   
    }

    else if(score >= 70 && score <= 79){
        return "B";
    }
    else if(score >= 60 && score <= 69){
        return  "C";
    }

    else if (score >= 33 && score <= 39){
        return "D";
    }

    else if (score  >= 0 && screen <= 32 ){
        return "Fail";
    }

    else{
        return "Invalid Marks❌"
    }

}

 console.log(getgrade(80));



 function checkGradeSwitch(marks) {
    let grade = Math.floor(marks / 10);

    switch (grade) {
        case 10:
        case 9:
            console.log("Grade: A+");
            break;
        case 8:
            console.log("Grade: A");
            break;
        case 7:
            console.log("Grade: B");
            break;
        case 6:
            console.log("Grade: C");
            break;
        default:
            console.log("Grade: Fail");
    }
}

checkGradeSwitch(72); // Output: Grade: B





Through Early return pattern

function getgrade(score) {
    if (score >= 90 && score <= 100) return "A+"
    if (score >= 80 && score <= 89) return "A"
    if (score >= 70 && score <= 79) return "B";
    if (score >= 60 && score <= 69) return "C";
    if (score >= 33 && score <= 39) return "D"
    if (score >= 0 && screen <= 32) return "Fail";
     return "Invalid Marks❌"
}

console.log(getgrade(70));



Rock paper scissor logic

function rps(user, computer) {
    if( user === "rock" && computer === "scissor") return "scissor";
    if (user === "scissor" && computer === "paper") return "scissor";
    if (user === "rock" && computer === "paper") return "paper";
    else return "invalid"
        
    
}

 console.log(rps("rock", "scissor")
)

