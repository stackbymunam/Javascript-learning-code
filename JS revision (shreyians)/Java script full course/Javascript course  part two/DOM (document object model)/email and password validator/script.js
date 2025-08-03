let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#password-error").textContent = "";

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isvalid = true
    let emailans = emailRegex.test(email.value);
    let passwordand = passwordRegex.test(password.value);

    if(!emailans){
        document.querySelector("#email-error").textContent = "Email is incorrect";
        document.querySelector("#email-error").style.display = "initial";
        isvalid = false
    }
    
    if(!passwordand){
        document.querySelector("#password-error").textContent = "password is incorrect";
        document.querySelector("#password-error").style.display = "initial";
        isvalid = false
    }

    if (isvalid) {
  let msgcorr = document.querySelector("#result-message");
  msgcorr.textContent = "Successfully submitted";
  msgcorr.className = "result-message success"; // replace classes
  msgcorr.style.display = "block"; // make sure it shows
} else {
  let msgnot = document.querySelector("#result-message");
  msgnot.textContent = "Failed submission";
  msgnot.className = "result-message error"; // replace classes
  msgnot.style.display = "block";
}

})
