//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary 
//equivalent using the toString(2) method and print the binary values.

let deci = [20, 30, 40];


for(i= 0; i<deci.length; i++)
{
    binary = deci[i].toString(2)
    console.log(binary);
}
