let count = 0;
let progrees = document.querySelector("#progress");
let btn = document.querySelector("button")
let h2 = document.querySelector("h2")

btn.addEventListener("click", function () {
    h2.textContent = "Downloading..."
    let int = setInterval(() => {
        if (count <= 99){
             count++
        progrees.style.width = `${count}%`;
        }
        else{
            h2.textContent = "Download succesfully"
            clearInterval(int)
        }
           
    }
   
        , 30);
})