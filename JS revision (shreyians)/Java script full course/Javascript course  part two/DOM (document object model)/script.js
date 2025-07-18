// 1. ✅ Select elements
    let title = document.getElementById("title");
    let input = document.querySelector("#nameInput");
    let button = document.getElementById("changeBtn");

    // 2. ✅ Set element property (innerText, value)
    title.innerText = "Hello from JavaScript!";
    input.value = "Default Name";

    // 3. ✅ Set attribute (like placeholder or type)
    input.setAttribute("placeholder", "Type your new name");
    button.setAttribute("title", "Click to change title");

    // 4. ✅ Apply inline CSS using style property
    title.style.color = "blue";
    title.style.fontSize = "28px";
    input.style.border = "2px solid green";

    // 5. ✅ Event example: update h1 text on button click
    button.addEventListener("click", function () {
      title.innerText = "Welcome, " + input.value + "!";
      title.style.color = "darkgreen";
    });



// questions 
// question 1 
 let buy = document.querySelectorAll(".buy-now");
   buy.forEach(buys => {
    
   })

//    // question 1 
//    let head = document.querySelector("#heading");
//    head.textContent = "welcome to shryinas"


   // question 2 
  let li =  document.querySelectorAll("li");

  li.forEach(function(val){
    console.log(val.textContent)
  })

  // question 3 
  let para = document.querySelector("p");
  
  para.innerHTML = "<b>Updated</> by javscript"


  // question 4 

  let scc = document.querySelector("img")

  console.log(scc.getAttribute("src"))


  // question 5 
 let a =  document.querySelector("a");
 a.href = "https://www.google.com"

 // question 6 

 let tit = document.querySelector("div");
 tit.setAttribute("title", "hey");

 // question 7 
  
 let btn = document.querySelector("button");
 btn.removeAttribute("disable")

 // question 8 

let ul =  document.querySelector("ul");
document.createElement("li")
li.textContent = "new task"
ul.appendChild(li)
 
// question 9 
 let ul1 = document.querySelector(ul);
let li = document.querySelector(li);

ul.removeChild(li)

// question 
 let p = document.querySelectorAll("p");

 p.forEach(function(val){
    val.style.fontSize = "16px"
 })
