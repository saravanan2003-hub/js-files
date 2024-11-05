// Write a program that takes a sequence of numbers as input and computes a new sequence by finding the LCM of every two consecutive numbers in the original sequence. Repeat this process until the sequence reduces to a single number. This final number is the answer.
// Input: [3, 5, 7, 15, 9]

// Step 1:
// LCM(3, 5) = 15
// LCM(5, 7) = 35
// LCM(7, 15) = 105
// LCM(15, 9) = 45
// New Array: [15, 35, 105, 45]

// Step 2:
// LCM(15, 35) = 105
// LCM(35, 105) = 105
// LCM(105, 45) = 315
// New Array: [105, 105, 315]

// Step 3:
// LCM(105, 105) = 105
// LCM(105, 315) = 315
// New Array: [105, 315]

// Step 4:
// LCM(105, 315) = 315
// New Array: [315]
// Final Output: 315

let array = [3, 5, 7, 15, 9];

for(i=0; i<array.length; i++){
    
}











