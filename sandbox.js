/*
let age = 25;
let year = 2024;

console.log(age, year);

age= 30;

console.log(age);

const PI = 3.14159;

console.log(PI);

// older way of creating variables
var score = 75;
console.log(score);

let text = "hello world!";
let t1 = "hello ";
let t2 = "world! :)";

// concatenation
let concatString = t1 + t2;
console.log(concatString);

// getting characters
console.log(concatString[0]);

// string length
console.log(concatString.length);

// string methods
console.log(concatString.toUpperCase());
console.log(concatString.toLowerCase());
console.log(concatString.replace("o", " of a"));
console.log(concatString.indexOf(":"));

// common string methods
let email = "mario@googlemail.com"

let result = email.lastIndexOf("o");

result = email.slice(0, email.indexOf("@"));
// get 10 chars from position 4 onward
result = email.substring(4, 10);
result = email.replace("m", "w");
result = email.replace("o", "w");

let radius = 10;

console.log(radius, PI);

// math operators +, - , *, /, **, %

result = PI * (radius ** 2);
console.log(result);

// template strings
let title ="Hobbit";
let author = "Tolkien";
let likes = 30;

// concat
result = "The book called " + title + " by " + author + " has " + likes + " likes!";
console.log(result);

// template string way
result = `The blog ${title} called by ${author} has ${likes} likes!`;

console.log(result);

// create html template
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span> This blog has ${likes} likes!</span>
`;

console.log(html);

let ninjas = ["nils", "ryu", "chun-li"];

console.log(ninjas.join("+"));

console.log(ninjas.indexOf("nils"));

result = ninjas.concat(["ken", "crystal"]);
console.log(result);
result = result.push("ninja");

let time = null;

// browser automatically give the values UNDEFINED
console.log(time, time +3, `the age is ${time}` );

time = 24;

// loose comparison, same value but different type
console.log(time == 25);
console.log(time == "24");
console.log(1 == true);

// strict comparison, same value and type
console.log(time === 24);
console.log(time === "24");
console.log(1 === true);

// type conversion

let scores = '100';

score = Number(scores);
score += 10;

console.log(score);
console.log(typeof score);

score = String(score)
console.log(score);
console.log(typeof score);




// for loop
let names = ["a", "b", "c", "d", "e"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while loop

let j = 0
while(j < names.length){
    console.log(names[j]);
    j++;
}

j = 0;
j = 6;
// runs regardles of condition
do{
    console.log("test ", j);
    j++;
} while (j < 5);

// if statements
let k  = 5;
if(k == 7){
    console.log("hi!");
}
else{
    console.log("not hi!");
}

// switch statements

let grade = "Aasd";

switch(grade){
    case "A":
        console.log("a");
        break;
    case "B":
        console.log("a");
        break;
    case "C":
        console.log("a");
        break;
    case "D":
        console.log("a");
        break;
    case "E":
        console.log("a");
        break;
    default:
        console.log("idk man you f'ed up :(");
}


// functions

// function declaration
function greet(){
    console.log("Hello there!");
}

greet();

// function expression
const speak = function(){
    console.log("good day!");
};

speak();

// arguments
const tell = function(name="default name"){
    console.log(`good day ${name}!`);
};

tell("nils");
tell();

const PI = 3.14159;
let radius = 10;

const rad = function(PI, radius){
    return PI * (radius**2);
};

console.log(rad(PI, radius));

// arrow functions

const calcArea = (PI, radius) =>  PI * (radius**2);
console.log(calcArea(PI, radius));

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});



people.forEach(function(person){
    console.log(person);
});


const ul = document.querySelector(".people");
const people = ["a", "b", "c"]
let html = ``;

people.forEach(function(person){
    // create html template
    html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;

const blogs = [
    {title: "t1", likes:"30"},
    {title: "t2", likes:"20"},
    {title: "t3", likes:"10"},
];

// object literals

let user  = {
    name: "nils", 
    age: 25,
    mail: "n@gmail.com",
    location: "ffm",
    speak: function(){console.log("helloooo!")},
    logout: function(){
        console.log(this.mail);
    },
    blogs: [
        {title: "t1", likes:"30"},
        {title: "t2", likes:"20"},
        {title: "t3", likes:"10"},
    ],
    logBlogs(){
        console.log("Blogs:");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user);
console.log(user.name);
user.name = "nicht nils";
console.log(user.name);

user.speak();
user.logout();
user.logBlogs();


console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(Math.E));
console.log(Math.round(Math.PI));

console.log(Math.random());
*/