//  // This is called a constructor function 
function Bakebiscuit(name, company, qty, price, flvaour){
    this.name = name;
    this.company = company;
    this.qty = qty;
    this.price = price;
    this.flvaoure = flvaour;
}
Bakebiscuit.prototype.manfacutrer = "Pakistan"
 let choclati = new Bakebiscuit("Sooper", "peekfrience", 10, 50, "special choclate");

// Through class

class biscuit{
    constructor(name, company, qty, price, flavour, c){
        this.name = name;
        this.company = company;
        this.flavour = flavour;
        this.price = price;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color  = this.color
        document.body.appendChild(h1);
    }
}

let bake = new biscuit("Sooper", 10, "peelfrience", "balaabl", "yellow")

 

