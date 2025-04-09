const callback = (arg) =>{
    console.log(arg)
}


const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Munam")

}