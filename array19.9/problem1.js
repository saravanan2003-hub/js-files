//   Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.

let marks = [100, 40, 70, 80];
let sum = 0;
let average = 0;

for(i=0; i<marks.length; i++)
{
    sum = sum + marks[i];
     average = sum/marks.length

}
console.log(average);
