//Write a program to create an object car with properties make, model, and year. Print the model of the car.

// let car = {
//     model : "BMW",
//     year : 2024
// }
// console.log(car.model);

//Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.

// let books = [{title : "The Adventures of Huckleberry Finn",
//               author : "Mark Twain"},
            
//             {title : "The Adventures of Tom Sawyer",
//             author: "Lewis Carroll"}
//         ]
// console.log(books[0].title);

//You have an array of 4 objects, each representing a car with properties brand and model. 
//Write a program to add a new property year to each object and assign a value, then print the updated array.

// cars = [
//     { brand: "Tata", model: "Nano" },
//     { brand: "Honda", model: "Civic" }
//   ]
// cars[0].year = 2010;
// cars[1].year = 2024;

// console.log(cars);

//You have an array of 3 objects, each representing a product with properties name and price. Write a program to calculate and print the total price of all the products in the array.



// //Given three numbers a, b, c print the maximum number amongst the three.
// function bigNumber(a, b, c){
// switch(bigNumber){
//   case a>b && a>c:
//     console.log(a);
//     break;
//   case b>a && b>c:
//     console.log(b);
//     break;
//   default:
//     console.log(c);
//     break;
// }
// }
// bigNumber(10,5,30);


// let names = ["apple", "orange", "pineapple"];

// for(i=0; i<names.length; i++){
//   if(names[i][0]=="a" || names[i][0]=="e" || names[i][0] == "i" ||names[i][0]=="o" || names[i][0]== "A" || names[i][0]=="E"|| names[i][0]=="O" || names[i][0]=="I" || names[i][0]=="U"){
//     console.log(names[i]);
//   } 
// }


// let products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 500 },
// ]
// let sum= 0;

// for(i=0; i<products.length; i++){ 
//     sum = sum + products[i].price;
// }
// console.log(sum);

// let students = [
//   { name: "Amar", grade: "A" },
//   { name: "Akbar", grade: "B" },
//   { name: "Anthony", grade: "A" },
// ]

// for(i=0; i<students.length; i++){
//   if(students[i].grade == "A"){
//     console.log(students[i].name)
//   }
// }


//Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

// let boo1 =[true, false, true];
// let boo2 = [false, true, true];
// let and = 0;
// let boo3 = [];
// for(i=0; i<boo1.length; i++){
//   and = boo1[i] && boo2[i]
//   boo3.push(and);
// }
// console.log(boo3);

// Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.

// let u1 = [1,2,3,4,5];
// let u2 = [3,4,5,6,7];

// var result = [];

//     // Add elements from the first array
//     for (var i = 0; i < u1.length; i++) {
//         if (result.indexOf(u1[i]) === -1) {
//             result.push(u1[i]);
//         }
//     }

//     // Add elements from the second array
//     for (var j = 0; j < u2.length; j++) {
//         if (result.indexOf(u2[j]) === -1) {
//             result.push(u2[j]);
//         }
//     }

//     console.log(result);


// //Count Vowels: Write a function that counts the number of vowels in a given string.
 
 
// let str = "saravanan";
// let b = str.split('');
// let count = 0;
// for(i=0; i<b.length; i++){
//    if(b[i]=="a" || b[i]== "e" || b[i]=="i" || b[i] == "o" || b[i]=="u" || b[i]== "A" || b[i]== "E" || b[i]=="O" || b[i]== "O"|| b[i]== "U"){
//        count = count + 1;
       
//    }
// }
// console.log(count)





//Check for Prime Number: Write a function that checks if a given number is a prime number.

// function isPrime(num) {
//     // Check if the number is less than 2
//     if (num < 2) {
//         return false; // 0 and 1 are not prime numbers
//     }

//     // Check for factors from 2 to the square root of num
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; // Found a factor, so it's not prime
//         }
//     }
//     return true; // No factors found, it is prime
// }



let  a = [5, 3, 2, 1, 4];
let b = arrangeFractions(a);
console.log(b) 



