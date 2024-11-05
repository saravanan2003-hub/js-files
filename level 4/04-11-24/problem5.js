// Search in Nested Arrays: Adapt the linear search to work on an array of arrays, searching for a target element across all nested arrays.
let n = 7
let array = [[1,2,3],[3,4,5],[2,2,7]];


for(i=0; i<array.length; i++){
    var arr = array[i]
    for(j=0; j<array[i].length; j++){
        if(arr[j]==n){
            var in1 = i;
            var in2 = j;
        }
    }
}
console.log(in1 + "," + in2);