
function creatcard(title, cname, views, monthsold, duration, thumbnail){
    let viewnumber
    if(views<1000000){
        let viewnumber = views/1000 + "k";
    }
    else if(views>10000000){
        let viewnumber = views/10000000 + "M"
    }
    else{
        let viewnumber = views/1000 + "k"
    }
    let html = `  <div class="card">
        <div class="iamge">
        <img src="" alt="${thumbnail}">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title} </h1>
            <p>${cname} . ${viewnumber} views . ${months} months ago</p>
        </div>
       </div>`
       document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html   
       
}





