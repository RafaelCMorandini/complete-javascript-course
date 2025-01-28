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

// Type Conversion and Coercion

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> False
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 

// Equality Operators: == vs. ===

const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No border');
}
