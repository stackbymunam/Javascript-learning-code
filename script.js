console.log("munam is a hackder");
console.log("he is a hecker")

setTimeout(() => {
    console.log("iam inside timeout bla bla bla")
}, 2000);

console.log("the end : thats it")



const callback = (arg)=>{
    console.log(arg)
}
const loadscritp = (src, callback)=>{
    let sc = document.createElement("script")
    sc.src = src
    sc.onload =  callback("harry");
    document.head.append(sc)
}

loadscritp("",)

