// Given an two arrays, given to Set Intersection on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. Result [1, 5, 8]

let array =  [3, 1, 5, 7, 8];
let array1 = [5, 1, 8, 10, 11];

let result = [];
for(i=0; i<array.length; i++){
    if(array1.includes(array[i])){
        result.push(array[i]);
    }
}

console.log(result);
