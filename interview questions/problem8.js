// Find the maximum elements of size k. Example arr ={3,2,1,4,2,9,2,5} k = 2 anser = 9 , 5

let array = [3,2,1,4,2,9,2,5];
let sorted = array.sort((a,b) => a-b);
let rd = Array.from(new Set(sorted));
console.log(rd.slice(rd.length-2))
