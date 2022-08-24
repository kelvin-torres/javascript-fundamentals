'use strict';

console.log('****ASSIGNMENTS AGAIN*****');
//LECTURE: Values and Variables
const country = 'USA';
const continent = 'North America';
const population = 330;

console.log(country, continent, population);
//LECTURE: Data Types
const isIsland = false;
let languageTest;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof languageTest
);
//LECTURE: let, const and var
const language = 'english';
console.log(typeof language);
//LECTURE: Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation);
halfPopulation++;
console.log(halfPopulation);

const finlandPopulation = 6;
const finlandSmaller = population > finlandPopulation;
console.log(finlandSmaller);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
//LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average. `
  );
}
//LECTURE: Equality Operators: == vs. ===
/*const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
} */
//LECTURE: Logical Operators
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria 😢`);
}
//LECTURE: The switch Statement
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
    console.log('Great language too 😅');
}
//LECTURE: The Conditional (Ternary) Operator
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

//const describeCountry = function (country, population, capitalCity) {
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const brazil = describeCountry('Brazil', 220, 'Brasilia');
const finland = describeCountry('Finland', 6, 'Helsinki');
const usa = describeCountry('USA', 330, 'Washington D.C.');
console.log(brazil, finland, usa);

//LECTURE: Function Declarations vs. Expressions
//Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const brazilPercentage = percentageOfWorld1(220);
const finlandPercentage = percentageOfWorld1(6);
const usaPercentage = percentageOfWorld1(330);
console.log(brazilPercentage, finlandPercentage, usaPercentage);
//Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(
  percentageOfWorld2(220),
  percentageOfWorld2(6),
  percentageOfWorld2(330)
);
//LECTURE: Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(
  percentageOfWorld3(220),
  percentageOfWorld3(6),
  percentageOfWorld3(330)
);
//LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world.`;
};
console.log(describePopulation('Brazil', 220), describePopulation('USA', 330));

//LECTURE: Introduction to Arrays
const populations = [220, 330, 6, 140];
console.log(populations);

//LECTURE: Basic Array Operations (Methods)

const neighbours = ['Canada', 'Mexico'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Mexico'));

neighbours[neighbours.indexOf('Mexico')] = 'Republic of Sweden';
console.log(neighbours);
