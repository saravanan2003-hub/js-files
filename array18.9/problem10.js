//Write a program to create an array of 3 items. Add a new item to the beginning using unshift(), then remove the first item using shift(). Print the updated array.

let countries = ['india', "USA", "africa"];

countries.unshift("asia");

console.log(countries)

countries.shift();
console.log(countries);