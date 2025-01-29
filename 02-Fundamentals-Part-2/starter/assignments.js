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