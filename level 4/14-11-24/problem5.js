// Find Pairs with a Given Sum
// Question: Write a function findPairs(arr, targetSum) that finds all unique pairs in an array that add up to a given target sum.
// Example:
// javascript
// findPairs([1, 2, 3, 4, 5], 5); // Output: [[1, 4], [2, 3]]

function findPairs(array, targetSum){
    let i = array[0];
    let a = [];
    
    for(i=0; i<array.length;i++){
        let n = [];
       for(j=i+1; j<array.length; j++){
        if(array[i] + array[j] === targetSum){
            n.push(array[i]);
            n.push(array[j]);
        }
       }
      if(n.length!==0){
        a.push(n);
      }
    }
    console.log(a);
}
findPairs([1, 2, 3, 4, 5], 5);
