// module pattern
let Bank = (function() {
    let bankbalance = 12000;

    function checkblance(){
        console.log(bankbalance)
    };

        function setbalance(val){
            bankbalance = val
        }
    function withdraw(val){
        if(val <= bankbalance){
            val -= bankbalance;
            console.log(bankbalance);
        };
    }

    return{
        checkblance,
        setbalance,
        withdraw,
    }
})();

// Factory function pattern

    function creatproduct(name, price) {
        let stock = 10;

        return {
            name,
            price,

            checkstock(){
                console.log(stock);
            },
            buy(qty){
                if(qty <= stock){
                    stock -= qty;
                    console.log(`${qty} is booked and  ${stock} pieces left`)
                }
                else{
                    console.error(`there is just ${stock} pieces`)
                };

            },
            refill(qty){
                stock += qty;
                console.log(`${qty} pecies are placed`);
            }
        }
    }


// observer pattern
class Youtubechannel{
    constructor(){
        this.subscribers = []
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(` ${user.name}, you have subscribed the channel`);
    }
    unsubscribe(user){
       this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`you have unsubscribed the channel`);
    }  
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
    
}

     class user {
        constructor(name) {
            this.name = name
        }

        update(data){
            console.log(`${this.name}, ${data}`)
        }

     }

     let shyreinas = new Youtubechannel();
     let user1 = new user("Munam");
     let user2 = new user("brooo");


     shyreinas.subscribe(user1);
     shyreinas.subscribe(user2)
     shyreinas.notify("we are trying to do a comeback");

 let apple= creatproduct("iphone", 200000)


class Youtubechannel{
    constructor(){
        this.subscribers = []
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(` ${user.name}, you have subscribed the channel`);
    }
    unsubscribe(user){
       this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`you have unsubscribed the channel`);
    }  
    notify(message){
        this.subscribers.forEach(sub => sub.update(message));
    }
    
}

     class user {
        constructor(name) {
            this.name = name
        }

        update(data){
            console.log(`${this.name}, ${data}`)
        }

     }

     let shyreinas = new Youtubechannel();
     let user1 = new user("Munam");
     let user2 = new user("brooo");


     shyreinas.subscribe(user1);
     shyreinas.subscribe(user2)
     shyreinas.notify("we are trying to do a comeback")


//  debouncing

let input = document.querySelector("input");

function debounce(fnc, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}

input.addEventListener("input", debounce(function(e) {
  console.log("User typed:", e.target.value);
}, 1000));





