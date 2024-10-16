//Create an array that holds the principal, rate of interest, and time in years for a loan. 
//Write a program to calculate the simple interest using the formula SI = (P * R * T) / 100 and print the result.


let SI = [10000, 5, 4];
let sum = 1;
for(i=0; i<SI.length; i++)
{
    sum = sum * SI[i];
    sim = sum/100;
}
console.log(sim);