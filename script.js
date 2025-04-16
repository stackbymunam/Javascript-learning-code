    async function getdata(){
    return new Promise((reslolve, reject)=>{
        setTimeout(() => {
            reslolve(455)
        }, 3000);
    })
}
 async function main(){

 
console.log("loading modules");

console.log("do something else");


console.log("load data");



let data = await getdata()

console.log(data)

    console.log("process data")

    console.log("task 2")
}
main()

// data.then((v)=>{
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
// })




