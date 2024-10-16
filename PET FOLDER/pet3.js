//Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

let colours = ["red", "green"];

colours.push("yellow", "blue");
console.log(colours);

//Create an array of 5 fruits. Use shift() to remove the first two fruits, one by one, 
//and print the array after each removal.

let fruits = ["apple", "orange", "pineapple", "grapes", "mango"];

fruits.shift();
fruits.shift();
console.log(fruits);

//Write a program to create an array of 2 sports. Use unshift() to add 3 more sports to the 
//beginning in a single line and print the array.

let sports = ["cricket", "foodball"];

sports.unshift("chess", "kabadi", "hockey");
console.log(sports);

//Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let devices = ["laptop", "mobile", "headphone"];
console.log(devices.indexOf("laptop"));

//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

let str = "HTML-CSS-JavaScript"
let spl = str.split("-")
console.log(spl);

//Write a program to create an array of 4 numbers. Use pop() to remove the elements one by one and store them in a 
//new array in reverse order. Print the reversed array.

let numbers = [2,4,6,8];
let array1 = [];
let array2 = 0;
for(i=numbers.length-1; i>=0; i--){
    array2 = numbers.pop();
    array1.push(array2);
}
console.log(array1);

//Create an array of 4 fruits. Use join() without any separator to combine the array elements into a
//single string and print the result.

let fruits1 = ["apple", "orange", "pineapple", "grapes", "mango"];
let fruits2 = fruits1.join()
console.log(fruits2);


//Write a program to create an object car with properties make, model, and year. Print the model of the car.

let car = {
    model : "BMW",
    year : 2024
}
console.log(car.model);

//Create an array of 2 objects, where each object represents a book with properties title and author. Print the title of the first book.


let books = [{title : "The Adventures of Huckleberry Finn",
    author : "Mark Twain"},
  
  {title : "The Adventures of Tom Sawyer",
  author: "Lewis Carroll"}
]
console.log(books[0].title);

//You have an array of 4 objects, each representing a car with properties brand and model. 
//Write a program to add a new property year to each object and assign a value, then print the updated array


cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" }
  ]
cars[0].year = 2010;
cars[1].year = 2024;

console.log(cars);

//You have an array of 3 objects, each representing a product with properties name and price. 
//Write a program to calculate and print the total price of all the products in the array.
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
]
let sum= 0;

for(i=0; i<products.length; i++){ 
    sum = sum + products[i].price;
}
console.log(sum);

// You have an array of 5 objects, each representing a student with properties name and grade. 
//Write a program to find and print the name of the student whose grade is "A".

let students = [
  { name: "Amar", grade: "A" },
  { name: "Akbar", grade: "B" },
  { name: "Anthony", grade: "A" },
]

for(i=0; i<students.length; i++){
  if(students[i].grade == "A"){
    console.log(students[i].name)
  }
}


//Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.


let marks = [100, 40, 70, 80];
let sum1 = 0;
let average = 0;

for(i=0; i<marks.length; i++)
{
    sum1 = sum1 + marks[i];
     average = sum1/marks.length

}
console.log(average);

//You have an array of test scores for 7 students. Write a program to find and print the highest score using the Math.max() function along with the spread operator.

let marks3 = [100, 50, 70, 80, 90, 60, 30];

console.log(Math.max(...marks3));



//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent using the toString(2) method and print the binary values.


let deci = [20, 30, 40];


for(i= 0; i<deci.length; i++)
{
    binary = deci[i].toString(2)
    console.log(binary);
}

//Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). Perform an AND operation on corresponding elements from both arrays and store the result in a new array. Print the resulting array.

let boo1 =[true, false, true];
let boo2 = [false, true, true];
let and = 0;
let boo3 = [];
for(i=0; i<boo1.length; i++){
  and = boo1[i] && boo2[i]
  boo3.push(and);
}
console.log(boo3);

//Create an array of old prices for 4 items and another array with the new prices. Write a program to calculate and print the percentage increase for each item.

let op = [10, 15, 20, 30];
let np = [15, 20, 25, 35];


for(i=0; i<op.length; i++)
{
    ratio = (np[i] - op[i])/op[i];
    
    final = ratio*100;

    console.log(`oldprize is${op[i]} newprize is ${np[i]} increse persentage is ${final}`);
}

//Write a program that takes two arrays of numbers representing two sets. Create a new array that represents the union of both sets (without duplicates) and print the result.


let u1 = [1,2,3,4,5];
let u2 = [3,4,5,6,7];

var result = [];

    // Add elements from the first array
    for (var i = 0; i < u1.length; i++) {
        if (result.indexOf(u1[i]) === -1) {
            result.push(u1[i]);
        }
    }

    // Add elements from the second array
    for (var j = 0; j < u2.length; j++) {
        if (result.indexOf(u2[j]) === -1) {
            result.push(u2[j]);
        }
    }

    console.log(result);

//Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. If there are multiple modes, print any one of them.

let numbers1 = [4, 1, 2, 2, 3, 4, 4, 5, 5, 4];

let frequency = {};
let maxCount = 0;
let mode;

for (let i = 0; i < numbers1.length; i++) {
    let num = numbers1[i];
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mode = num;
    }
}

console.log("The mode is:", mode);

// Modulus Operation for Time Calculation
// Create an array of times (in minutes) that different tasks take to complete. Write a program to find out how many full hours and leftover
//  minutes each task takes using modulus (%) and division (/) operators, and save the result in the same array. Print the array.

let taskTimes = [150, 75, 200, 90, 120];

let convertedTaskTimes = [];

for (let i = 0; i < taskTimes.length; i++) {
    let minutes = taskTimes[i];
    let hours = Math.floor(minutes / 60); 
    let remainingMinutes = minutes % 60;  
    convertedTaskTimes[i] = `${hours} hours and ${remainingMinutes} minutes`;
}

console.log(convertedTaskTimes);

// Simple Interest Calculation
// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. Find the simple interest for each array object and store it
//  in a new array. Print this array.
// For example: 
// details = [
// { principal : 10000, rateOfInterest : 5, noOfYears: 4},
// { principal : 15000, rateOfInterest : 4, noOfYears: 3},
// ]
// Output:

let arr = [
  { principal: 1000, rateOfInterest: 5, noOfYears: 2 },
  { principal: 1500, rateOfInterest: 4.5, noOfYears: 3 },
  { principal: 2000, rateOfInterest: 6, noOfYears: 1 },
  { principal: 2500, rateOfInterest: 5.5, noOfYears: 4 },
  { principal: 3000, rateOfInterest: 7, noOfYears: 5 },
  { principal: 3500, rateOfInterest: 6.5, noOfYears: 2 },
  { principal: 4000, rateOfInterest: 5, noOfYears: 6 },
  { principal: 4500, rateOfInterest: 4, noOfYears: 1 },
  { principal: 5000, rateOfInterest: 3.5, noOfYears: 2 },
  { principal: 5500, rateOfInterest: 6, noOfYears: 3 }
];

let simpleInterest=[];
for(let i=0;i<arr.length;i++){
let sp= (arr[i].principal * arr[i].rateOfInterest * arr[i].noOfYears)/100;
simpleInterest.push(sp);
}
console.log(simpleInterest);


// Calculating Total Marks of Students 
// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. Write a program to 
// calculate the total marks for each student and store them in a new array. Print the new array.
// Example:
// students = [
// { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
// { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
// ]
// Output:
// [ 240, 175 ]

// Array of 10 student objects
let students1 = [
  { subject1Marks: 85, subject2Marks: 90, subject3Marks: 78 },
  { subject1Marks: 92, subject2Marks: 88, subject3Marks: 95 },
  { subject1Marks: 76, subject2Marks: 84, subject3Marks: 80 },
  { subject1Marks: 89, subject2Marks: 92, subject3Marks: 91 },
  { subject1Marks: 65, subject2Marks: 70, subject3Marks: 68 },
  { subject1Marks: 95, subject2Marks: 94, subject3Marks: 90 },
  { subject1Marks: 78, subject2Marks: 76, subject3Marks: 80 },
  { subject1Marks: 88, subject2Marks: 82, subject3Marks: 84 },
  { subject1Marks: 72, subject2Marks: 75, subject3Marks: 78 },
  { subject1Marks: 80, subject2Marks: 85, subject3Marks: 88 }
];
let average2=[]
for(let i=0;i<students1.length;i++){
  let avg =((students1[i].subject1Marks + students1[i].subject2Marks + students1[i].subject3Marks)/3).toFixed(2);
average2.push(avg);
}
console.log(average2);


// Calculating Total Monthly Expenses
// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. Write a program to calculate the 
// total monthly expense for each object and store it in a new array. Print the new array.
// Example:
// expenses = [
// { rent: 1000, groceries: 500, utilities: 200 },
// { rent: 800, groceries: 400, utilities: 150 },
// ]
// Output:
// [ 1700, 1350 ]

let monthlyExpenses = [
  { rent: 1200, groceries: 300, utilities: 150 },
  { rent: 1500, groceries: 400, utilities: 200 },
  { rent: 800, groceries: 250, utilities: 100 },
  { rent: 1000, groceries: 350, utilities: 175 },
  { rent: 1300, groceries: 500, utilities: 220 },
  { rent: 900, groceries: 280, utilities: 130 },
  { rent: 1100, groceries: 360, utilities: 180 },
  { rent: 950, groceries: 310, utilities: 160 },
  { rent: 1400, groceries: 450, utilities: 210 },
  { rent: 1250, groceries: 350, utilities: 140 }
];

let total=[]
for(let i=0;i<monthlyExpenses.length;i++){
  let  sum=(monthlyExpenses[i].rent + monthlyExpenses[i].groceries +monthlyExpenses[i].utilities)
total.push(sum);
}
console.log(total);
