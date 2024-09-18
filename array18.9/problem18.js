//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

// let string = "HTML-CSS-JavaScript";
// let array = string.split();
// console.log(array);


// let  number = 1350;
// let  digits = [];

// for (let char of number.toString()) {
//     digits.push(Number(char));
// }

// console.log(digits); // Output: [1, 3, 5, 0]


let number = "13509";

let str = number.toString()
console.log(str)

let spl = str.split('')
console.log(spl);

let temp = 0;

let map = spl.map(Number)
for(i=0; i<map.length;i++)
{
   temp = map[i] + temp;
}

console.log(temp);
