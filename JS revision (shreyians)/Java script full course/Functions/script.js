//question
let studentinfo = {
    name: "Munam",
    age: 16,
    isEnrolled: true,
}

//question 2
let user = {
    "first-name": "harsh",
}
user["first-name"]


//question 3
const locations = {
    city: "Bhopal",
    cordinator:{
        lat: 23.1,
        lng: 77.1,
    }
}

// question 4

let {city} = locations;
let {lat} = locations.cordinator;

question 5
let user =  {
    "first-name": "harsh",

};

let {"first-name": firstname} = user;

//question 6
const course = {
    title: "javascript",
    duration: "4 weeks"
};
for(let keys in  course){
    console.log(keys);
}
//question 8
const course = {
    title: "javascript",
    duration: "4 weeks"
};

Object.entries(course).forEach(function(val){
    console.log(val[0] + ":", val[1])
});

//question 9
const original = {a:1 , b: 2};
const copy = {...original}

// question 10
const obj1 = {info: {score:80}};

 let newobj = (JSON.parse(JSON.stringify(obj1)))

// question 11
const person = {};
console.log(person?.profile?.name);

// question 13
const key = "role";
let obj = {
    name: "Harsh",
    [key]: "admin"
}

console.log(obj)
