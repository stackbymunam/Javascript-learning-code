// // this is how can we store items in localstorage
// localStorage.setItem("name", "Munam"); 

// // this is how we get data from localstorage
// let val = localStorage.getItem("name");

// // this is how we remove data from localstorage
// localStorage.removeItem("name");

// // this is how we update localstorage data
// localStorage.setItem("name", "birthday");


// sessionStorage.setItem("name", "Munam");

// let get = sessionStorage.getItem("name");


// sessionStorage.removeItem("name")


// localStorage.setItem("name", JSON.stringify(["akash", "kuch bhi", "bhopinder jogi"]));


// let get = JSON.parse(localStorage.getItem("name"));

let btn = document.querySelector("button")

function darkorlight(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add("dark")
    document.body.classList.remove("light")
}
else{
     document.body.classList.add("light")
     document.body.classList.remove("dark")
}

}



localStorage.getItem("theme")

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"))
}

else{
darkorlight()
}
btn.addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");

        localStorage.setItem("theme", "light")
    }
    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");


        localStorage.setItem("theme", "dark")
    }
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(){
    if(!localStorage.getItem("theme")){
        darkorlight()

    }
});