//Create a function that capitalizes the first letter of each word in a given sentence

let array = ["apple", "orange", "grapes"];
let res=array.map(item => item.charAt(0).toUpperCase()+item.slice(1));
console.log(res);