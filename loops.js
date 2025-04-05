let a = [1, 3, 4, 5, 6 ,78,]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

let obj ={
    a: 2,
    b: 3,
    c: 4,

}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}

for (const iterator of a) {
    console.log(iterator)
}
let newarr = [1 ,3 ,4, 5, 7,]
let newarr =  a.map((e)=>{
    return e ** 2
})
console.log(newarr)


const graterthanseven = (e)=>{
    if(e>7){
        return true
    }
   return false
}
console.log(newarrfilter(greaterthanseven))


