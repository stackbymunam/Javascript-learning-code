class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("mai kha raha hoon");
    }

    jump(){
        console.log("mai kood raha hon")
    }
}

class lion extends Animal {
    constructor(name){
        super(name)
        this.name = name
        console.log("object is created... and he is a lion")
    }
}
let a = new Animal("Bunny");
console.log(a)

let l = new lion("shera")
console.log(l)

