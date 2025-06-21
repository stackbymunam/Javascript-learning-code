const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordtomatch, cities) {

    const regex = RegExp(wordtomatch, "gi") 
return cities.filter(place => {
    return place.city.match(regex) || place.state.match(regex);
})
}

function displaymatches() {
    const matcharray = findMatches(this.value, cities);
    const html = matcharray.map(place => {
        return `
        <li> 
        <span class= "name>${place.city}, ${place.state} </span>
        <span class= "population>" ${place.population} </span>
        </li>
        `
    }).join() 
    
    suggestion.innerHTML = html;
}

const  searchinput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");

searchinput.addEventListener("change", displaymatches);
searchinput.addEventListener("keyup", displaymatches);
