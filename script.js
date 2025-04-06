let button = document.getElementById("btn")
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = " <b> yayy i was clicked i knoew it </B>"
})

button.addEventListener("contextmenu", ()=>{
    alert("dont right click please it broser will turn into dark wed")
    document.querySelector(".box").style.backgroundColor = "blue"
})
document.addEventListener("keydown", (e)=>{
    console.log(e)
})
