let sel = document.querySelector("select");
let heading = document.querySelector("h3");
heading.style.textTransform = "capitalize"
sel.addEventListener("change", function(dets){
   heading.textContent = `${dets.target.value} device selected`
});

let text = document.querySelector("h1");
window.addEventListener("keydown", function(dets){
   if(dets.key === " "){
      text.textContent = "SPC"
   }
   else{
      text.textContent = dets.key
   }
})


let btn = document.querySelector(".btn");
let fileinp = document.querySelector(".fileinp")

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
   const file = dets.target.files[0]
   if(file){
    btn.textContent = file.name
   }
});

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main")

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profle = document.createElement("div");
    profle.classList.add("profile");

    card.appendChild(profle)

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);



    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value
    let p = document.createElement("p");
    p.textContent = inputs[3].value

    profle.appendChild(img);
    card.appendChild(profle);

    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)

main.appendChild(card)

inputs.forEach(function(inp){
    if(inp.type !== "submit"){
        inp.value = ""

    }
});

});



let abcd = document.querySelector(".ABCD");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow"
})
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red"
})


window.addEventListener("mousemove", function(dets){
    abcd.style.top = dets.clientY + "px";


   
let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets){
   dets.target.classList.toggle("lt")
})

let inp = document.querySelector("input");
let num = document.querySelector("span");

inp.addEventListener("input", function(dets){
    console.log(dets)
    let left = 20 - inp.value.length
    num.textContent = left
    if(left<0){
        num.style.color = "red"
    }
    else{
        num.style.color = "white"
    }
});

    abcd.style.left = dets.clientX + "px"
});

