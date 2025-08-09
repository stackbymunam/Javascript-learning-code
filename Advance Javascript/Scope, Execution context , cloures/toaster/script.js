  function creattoaster(config){
    return function(str){
       let div =  document.createElement("div");
        div.textContent = str
        div.className = "fixed parent p-10 flex flex-col gap-2"

        document.querySelector(".parent").appendChild(div)

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }
  }

 let toaster = creattoaster({
    positionX: "right", 
    positionY: "top",
    theme: "dark",
    duration: 3,
})

toaster("Download now")
setTimeout(() => {
    toaster("i accepted your request")
}, 2000);

