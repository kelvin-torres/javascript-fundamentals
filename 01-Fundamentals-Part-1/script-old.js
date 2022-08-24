/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let country = 'Brazil';
let continent = 'SouthAmerica';
let populationBrazil = 200;

console.log(country, continent, populationBrazil);

let isIsland = false;
let language = 'portuguese';
console.log(typeof isIsland, typeof populationBrazil, typeof country, typeof language);

let halfPopulation = populationBrazil / 2;
console.log(halfPopulation);

populationBrazil += 1
console.log(populationBrazil)

let populationFinland = 6;

console.log(populationBrazil > populationFinland)

let averagePopulation = 33;
console.log(populationBrazil < averagePopulation)

//LECTURE: Strings and Template Literals
let description = `${country} is in ${continent}, and its ${populationBrazil} million people speak ${language}`

console.log(description)

//LECTURE: Taking Decisions: if / else Statements
const age = 14

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`)
} else {
    console.log(`Sarah is too young. Wait another ${18 - age} year(s)`)
}

if (populationBrazil >= 33) {
    console.log(`Brazil's population is ${populationBrazil - 33} million above average`)
} else {
    console.log(`Brazil's population is below average`)
}


//LECTURE: Type Conversion and Coercion

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143


//LECTURE: Equality Operators: == vs. ===

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log(`7 is also a cool number`)
} else {
    console.log(`number is not 23 or 7`)
}; 

const numNeighbours = Number(prompt(`How many neighbour countries does your country
have?`));
console.log(numNeighbours);

if (numNeighbours === 1) {
    console.log(`Only 1 border!`)
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`No borders`)
} 

//LECTURE The Switch Statement:

const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`Plan Course Structure`);
        console.log(`Go to Coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record Videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}

const language = prompt(`What's the language`)

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D')
}; */

//LECTURE The Conditional (Ternary) Operator: 

age = 17

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 💧'
}
console.log(drink2);

console.log(`i Like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

