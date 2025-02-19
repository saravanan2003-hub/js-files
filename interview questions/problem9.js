// 9. Input : {1, 2, 3, 4, 5}
// Output : {120, 60, 40, 30, 24}
// write code for this in O(n).
// Explanation :
// in first iteration avoid first element and multiply others in array

let array = [1,2,3,4,5];
let result = [];
let mul = 1
for(i=0; i<array.length; i++){ //n
    mul *= array[i]
}

for(i=0; i<array.length; i++){ //n
    let div = mul/array[i];
    result.push(div)
}

console.log(result)