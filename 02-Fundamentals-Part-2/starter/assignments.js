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

// Introduction to Arrays

const populations = [216, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ['Canada', 'Mexico'];

neighbours.push('Utopia');
neighbours.pop('Utopia');

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central european country :D')
}

neighbours[neighbours.indexOf('Mexico')] = 'Republic of Mexico'
console.log(neighbours);

// Introduction to Objects

const myCountry = {
    country: 'Brazil',
    capital: 'Brasilia',
    language: 'porguese',
    population: 216,
    neighbours: ["Argentina", "Bolivia", "Colombia", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela", "French Guiana"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours === 0 ? true : false;
    }

};

// Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
