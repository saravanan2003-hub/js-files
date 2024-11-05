// Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }

let array = [5, 2, 3, 5, 7, 5, 8];
let array1 = []; 

for(i=0; i<array.length; i++){
    if(array[i]===5){
        array1.push(i);
    }
}
console.log(`firstIndex: ${array1[0]}, lastIndex: ${array1[array1.length-1]}`)





