// Input: nums = [1, 2, 3, 4, 5, 6, 7], target = 8  
// Output: [[1,7], [2,6], [3,5]]  

let array = [1, 2, 3, 4, 5, 6, 7]
let target = 8;
let result = []
for(i=0; i<array.length; i++){
    let arr = [];
    let a = array[i] - target;
    for(j=i+1; j<array.length; j++){
        if( array[i] + array[j] === target){
            arr.push(array[i], array[j])
            result.push(arr) 
        }
    }
      
}
console.log(result);
