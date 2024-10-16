//  Write a program that takes two arrays of numbers representing two sets. Create a new array 
//that represents the union of both sets (without duplicates) and print the result.

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];
let i = 0;
while(i<a.length){
    for(c=0;  c<b.length; c++){
        if(a[i] == b[c]){
        console.log(a[i]);   
        }
        
       
    }
    i++;
}