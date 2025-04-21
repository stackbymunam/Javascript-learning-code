//  this is iffi

async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
( async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

// this is destructing
    let [x, y, ...rest] = [1,6, 8, 3, 5,6, 7, 8,9]
    console.log(x,y, rest)
  

// destructuring Object
let obj ={
    a:1,
    b:4,
    c:7
}

let {a,b} = obj
console.log(a,b)

})()