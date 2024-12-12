// Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3,3,3] output [3, 4, 1, 5, 9]
let array = [3, 4, 3, 3, 1, 5, 1, 9, 3, 3, 3, 3, 3];
let result =[];
// for(i=0; i<array.length; i++){
//    if(!result.includes(array[i])){
//             result.push(array[i]);
//     }
// }
// console.log(result);


for(i=0; i<array.length; i++){
    for(j=i+1; j<array.length; j++){
        if(array[i]===array[j]){
            array.splice(j,1);
            j--;
        }
    }
}
console.log(array);