let prom1 = new Promise((resolve, reject) => {
let a = Math.random();
if(a>0.5){
    reject("no random number are supporting you ")
}
else{
    setTimeout(() => {
        console.log("yeah iam inn bal bla bla")
        resolve("harry")
    }, 3000);
}


})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a>0.5){
        reject("no random number are supporting you ")
    }
    else{
        setTimeout(() => {
            console.log("yeah iam inn bal bla bla")
            resolve("harry")
        }, 3000);
    }
    
    
    })


let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})