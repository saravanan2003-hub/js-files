//Create an array of old prices for 4 items and another array with the new prices. Write a program 
//to calculate and print the percentage increase for each item.


let op = [10, 15, 20, 30];
let np = [15, 20, 25, 35];


for(i=0; i<op.length; i++)
{
    ratio = (np[i] - op[i])/op[i];
    
    final = ratio*100;

    console.log(`oldprize is${op[i]} newprize is ${np[i]} increse persentage is ${final}`);
}