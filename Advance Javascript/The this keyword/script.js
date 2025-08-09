let form = document.querySelector("form");

const userManger = {
    user: [],
    init: function() {
        form.addEventListener("click", function(e){
            e.preventDefault()
            console.log(this)
        })
        
    },
    adduser: function() {},
    removeuser: function(){}
}

userManger.init();