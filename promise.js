let prom = new Promise((resolve, reject)) => {
    let a = Math.random
    if (a < 0.5) {
        reject("no we are not suppoting this ")
    }
    else {
        setTimeout(() => {
            console.log("yes iam done");
            resolve("harry")
        }, 2000);
    }
    prom1.then(a) =>{
        console.log(a)
    }
}