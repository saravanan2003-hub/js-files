// Question: Write a function rotateArray(arr, k) that rotates an array to the right by k positions.
// rotateArray([1, 2, 3, 4, 5], 2); // Output: [4, 5, 1, 2, 3]

let array = [1, 2, 3, 4, 5];
function rotateArray(arr, k){
    let n=[]
for(i=k+1; i<arr.length; i++){
    n[n.length]=arr[i];
}
for(j=0; j<=k; j++){
    n[n.length]=arr[j]
}
console.log(n);
}

rotateArray([1, 2, 3, 4, 5], 2)

