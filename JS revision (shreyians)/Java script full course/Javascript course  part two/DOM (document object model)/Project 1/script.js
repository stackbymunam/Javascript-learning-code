const users = [
  {
    name: "Lisa Monroe",
    pic: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Silent in this loud world."
  },
  {
    name: "Ethan Brooks",
    pic: "https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Tech lover with a heart for music."
  },
  {
    name: "Ava Bennett",
    pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Exploring one city at a time 🌍"
  },
  {
    name: "Noah Reed",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Design is intelligence made visible."
  },
  {
    name: "Sophia Clarke",
    pic: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Caffeine-powered and camera-ready ☕📸"
  },
  {
    name: "Jackson Lee",
    pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Code. Create. Repeat. 💻🔥"
  },
  {
    name: "Maya Patel",
    pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Dancer by soul, dreamer by mind 💃✨"
  },
  {
    name: "Owen Carter",
    pic: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    bio: "Just trying to be better than I was yesterday."
  }
];

function showuser(arr){
    arr.forEach(function(user){
        // Create the main card container
const card = document.createElement("div");
card.className = "card";

// Create and append the image
const img = document.createElement("img");
img.src = user.pic;
img.alt = "";
img.className = "bg-img";
card.appendChild(img);

// Create and append the blurred-layer div
const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage = `url(${user.pic})`
blurredLayer.className = "blurred-layer";
card.appendChild(blurredLayer);

// Create content container
const content = document.createElement("div");
content.className = "content";

// Create and append h3
const heading = document.createElement("h3");
heading.textContent = user.name;
content.appendChild(heading);

// Create and append paragraph
const paragraph = document.createElement("p");
paragraph.textContent = user.bio;
content.appendChild(paragraph);

// Append content to card
card.appendChild(content);

// Append the card to the body (or any container)
document.querySelector(".cards").appendChild(card);

    })
}

showuser(users);