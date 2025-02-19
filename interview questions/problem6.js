// Find the Kth largest element in an unsorted array.
// Input: nums = [3,2,1,5,6,4], k = 2  
// Output: 5  

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4  
// Output: 3 

function findKthLargest(array , k){
    let sort = array.sort((a,b)=>a-b);
    let set = new Set(sort)
    let result = Array.from(set)
    
    console.log(result[result.length-k])
}

findKthLargest( [3,2,1,5,6,4], 2)
findKthLargest( [3,2,3,1,2,4,5,5,6], 4)

function findKthMin(array , k){
    let sort = array.sort((a,b)=>a-b);
    let set = new Set(sort)
    let result = Array.from(set)    
    console.log(result[k-1])
}

findKthMin( [3,2,1,5,6,4], 2)
findKthMin( [3,2,3,1,2,4,5,5,6], 4)
