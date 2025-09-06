function showuser(){
fetch("https://randomuser.me/api/?results=3")
.then(rawdata => rawdata.json())
.then((data) => {

    document.querySelector(".users").innerHTML = "";

    data.results.forEach((user) => {
        console.log(user)       // Outer Card Container
const card = document.createElement("div");
card.className = "bg-gray-900 rounded-lg shadow-lg p-6 max-w-sm w-full";

// Top Flex Container
const flexContainer = document.createElement("div");
flexContainer.className = "flex items-center space-x-4";

// Avatar Image
const avatar = document.createElement("img");
avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700 filter grayscale";
avatar.src = user.picture.large;
avatar.alt = "User Avatar";

// Text Container
const textContainer = document.createElement("div");

// Name
const name = document.createElement("h2");
name.className = "text-xl font-semibold text-white";
name.textContent = user.name.first;

// Email
const email = document.createElement("p");
email.className = "text-gray-400";
email.textContent = user.email;

// Status Badge
const status = document.createElement("span");
status.className = "inline-block mt-2 px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full";
status.textContent = "Active";

// Build Structure
textContainer.appendChild(name);
textContainer.appendChild(email);
textContainer.appendChild(status);

flexContainer.appendChild(avatar);
flexContainer.appendChild(textContainer);

card.appendChild(flexContainer);

// Append to Body
document.querySelector(".users").appendChild(card)

    })
})
}

showuser();

document.querySelector("#refreshBtn").addEventListener("click", function(){
showuser();
})

// i wiil be back with the same energy
