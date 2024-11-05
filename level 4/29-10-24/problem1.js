// Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

let array = [1, 2, 3, 4, 5, 6];
let oddCount = 0;
let evenCount = 0;

for(i=0; i<array.length; i++){
    if(array[i] % 2===0){
        evenCount = evenCount + 1;
    }
    else{
        oddCount = oddCount + 1;
    }
}
console.log(`even: ${evenCount}, odd: ${oddCount}`);
