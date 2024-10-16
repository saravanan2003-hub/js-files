//Implement a function that returns the second largest number in an array.


let array = [100, 90, 80, 70, 120];
let a = array[0];
let largerst=0;
let secondLargest = 0;
let thirdLargest = 0;
for(i=0; i<array.length; i++){
    if(a<=array[i]){
        largerst = array[i];
        
    }
}
// console.log(largerst); //to find first largest number for first loop

for(i=0; i<array.length; i++){
    if(secondLargest<=array[i] && array[i]<largerst){
        secondLargest=array[i];
    }
}//to find second largest number for second loop
// console.log(secondLargest);

for(i=0; i<array.length; i++){
    if(thirdLargest<=array[i] && array[i]<largerst && array[i]<secondLargest){
    thirdLargest = array[i];
    }
}
console.log(thirdLargest);

