function snakewordgame() {
    
    let userdata;


    let wordchoices = ["S" , "N", "G"];
    let randomindex = Math.floor(Math.random() * 3)
    let randomwords = wordchoices[randomindex]


    userdata = (prompt("Enter the word").toUpperCase)

    if(userdata === randomindex){
        alert("Congratulations you win")
    }
    
    else{
        alert("i won thats it")
    }
   
}
snakewordgame()
