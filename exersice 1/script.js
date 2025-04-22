function randomnum() {
    let guess = prompt

    let attempts = 0


    const randomnum = Math.floor(Math.random()* 100 + 1)
    while(true){
        guess = parseInt(prompt("let guess the number "));
        attempts++;

        if(guess === randomnum){
            alert(`correct answer ${randomnum}./n you result is ${100 - attempts}` )
            break;
        }
        else if(guess > randomnum){
            alert("the number is too high try again")
        }

        else if(guess < randomnum){
            alert("the number is too low")
        }

        else{
            ("enter the valid number")
        }
    }
    
}

randomnum();
