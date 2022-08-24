let js = "amazing";
//if (js === "amazing") alert("JavaScript is fun!");

/*console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas"
console.log(firstName); */

//LECTURE: Values and Variables

const country = 'Brazil';
const continent = 'SouthAmerica';
let population = 200;

//console.log(country, continent, population);

//LECTURE: Data Types
let isIsland = false;

//console.log(typeof country, typeof continent, typeof population, typeof isIsland);

//LECTURE: let, const and var
const language = 'portuguese'
//console.log(typeof country, typeof continent, typeof population, typeof isIsland, typeof language);

/*LECTURE: Basic Operators

console.log(population / 2);
population++
console.log(population);
console.log(population > 6);
console.log(population < 33)
//const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak' + language; */

//LECTURE: Strings and Template Literals
const description = `${country} is in ${continent} and its ${population} million people speaking ${language}`
console.log(description);

//LECTURE: Taking Decisions: if / else Statements
const age = 15;
if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    console.log(`Sarah is too young, she has to wait ${18 - age} years`);
}

// LECTURE: Equality Operators: == vs. ===
/*const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log(`Your country has ${numNeighbours} Neighbours!`);
} else {
    console.log('No borders')
}*/

//LECTURE: Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} 😊`);
} else {
    console.log(`${country} does not meet your criteria 😞`);
};

//LECTURE: The switch Statement
//const day = prompt('Which day of the week?')
const day = 'monday';

switch (day) {
    case 'monday':
        console.log("Mondays are always in the office 💪");
        break;
    case 'tuesday':
        console.log("Go to the office, 2nd day of the week still");
        break;
    case 'wednesday':
        console.log("work from home (half of the week 🙏");
        break;
    case 'thursday':
        console.log("Work in the office and celula in the evening");
        break;
    case 'friday':
        console.log("Work from home");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend ! 😎");
        break;
    default:
        console.log("Not a valid day!");
}

/*const languageQuestion = prompt("What's the language that your country speaks?")

switch (languageQuestion) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!");
        break
    case 'spanish':
        console.log("2nd place in number of native speakers");
        break
    case 'english':
        console.log("3rd place");
        break
    case 'hindi':
        console.log("Number 4");
        break
    case 'arabic':
        console.log("5th most spoken language");
        break
    default:
        console.log("Great language too 😅");
} */

//LECTURE: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 30 ? 'above' : 'below'} average`)