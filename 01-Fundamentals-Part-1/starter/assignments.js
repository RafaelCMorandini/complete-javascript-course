// Values and Variables

const country = 'Brazil';
const continent = 'South America';
let population = '220';

console.log(country);
console.log(continent);
console.log(population);

// Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

// let, const and var

language = 'Portuguese';

// Basic Operators

console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description1);

// Strings and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description2);

// Taking Decisions: if / else Statements

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}
