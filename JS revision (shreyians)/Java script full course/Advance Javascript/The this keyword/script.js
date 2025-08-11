let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManger = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitform.bind(this))
    },
    submitform: function (e) {
        e.preventDefault();
        this.adduser()

    },
    adduser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
        });
        form.reset();
        this.renderui()
    },
    renderui: function(){
         document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

    // to remove the card when click it
         card.addEventListener("click", () => {
      this.users.splice(index, 1);
      this.renderuser();
    })
      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
    });
    },
    removeuser: function () {},
}


userManger.init();
