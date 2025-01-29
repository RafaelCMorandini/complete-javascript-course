'use strict';

// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descBrazil = describeCountry('Brazil', 216, 'Brasilia');

console.log(descPortugal);
console.log(descGermany);
console.log(descBrazil);

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}


const percentageChina1 = percentageOfWorld1(1441);
const percentageGermany1 = percentageOfWorld1(83);
const percentageBrazil1 = percentageOfWorld1(216);

console.log(percentageChina1);
console.log(percentageGermany1);
console.log(percentageBrazil1);

const percentageChina2 = percentageOfWorld2(1441);
const percentageGermany2 = percentageOfWorld2(83);
const percentageBrazil2 = percentageOfWorld2(216);

console.log(percentageChina2);
console.log(percentageGermany2);
console.log(percentageBrazil2);

// Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageChina3 = percentageOfWorld3(1441);
const percentageGermany3 = percentageOfWorld3(83);
const percentageBrazil3 = percentageOfWorld3(216);

console.log(percentageChina3);
console.log(percentageGermany3);
console.log(percentageBrazil3);

// Functions Calling Other Functions

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`
}

console.log(describePopulation('Brazil', 216));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));
