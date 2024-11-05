// Search in Nested Arrays: Adapt the linear search to work on an array of arrays, searching for a target element across all nested arrays.

let n = 6;

let array = [[1,2,[1,6]], [3,4,5], [2,2,1]];

for(i=0; i<array.length;i++){
    var arr = array[i];
        for(j=0; j<arr.length; j++){
            var arr1 = arr[j];
                for(k=0; k<arr1.length; k++){
                    if(arr1[k]==n){
                        console.log(`${i}, ${j}, ${k}`);
                    }
                }
        }
    
}


    
