 function bakebiscuit(name, company, flavour, manfacturer){
  this.name = name;
  this.company = company;
  this.manfacturer = manfacturer;
  this.flavour = flavour;  
 };

  let biscuit = new bakebiscuit("sooper", "peelfrience", "choclate", "Pakistan");

  console.log(biscuit);


  class Clothes{
    constructor(name, qty, manfacturer, industryname){
        this.name = name;
        this.qty = qty;
        this.manfacturer = manfacturer
        this.industryname = industryname
    }
  }
  let newclothes = new Clothes("cotton", "pure", "Pakistan", "getstextile")
  let oldclothes = new Clothes("cotton", "used", "Pakistan","getstextile")

  console.log(newclothes);
  console.log(oldclothes);


  class Admin extends Clothes{
    constructor(CEO){
    super("cotton", "pure", "Pakistan", "getstextile")
    this.CEO = CEO;

    }

  }

  let CEO = new Admin("ELon Musk");
  console.log(CEO);
