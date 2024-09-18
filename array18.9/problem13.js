//Write a program that converts an array of 3 items into a string using join(), then converts that string back into an array using split() and prints both.

let array = ["saravanan", "senthil", "joshitha"];

let string = array.join();
console.log(string);
let array1 = string.split();
console.log(array1);