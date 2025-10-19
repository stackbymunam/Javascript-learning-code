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


//  let hp = creatproduct("laptop", 70000);
//  let apple= creatproduct("iphone", 200000)



