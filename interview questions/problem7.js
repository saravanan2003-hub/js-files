// List all the second 2nd max in table (not one second largest)
// [7, 8, 8, 9, 10, 10, 5, 6]
// Output:
// [9]
// [3, 1, 4, 4, 2, 2, 5, 5, 5]
// [4, 4]

function allSecondLargest(array){
    let result = [];
    let sort = array.sort((a,b)=> a-b);
    let set = Array.from(new Set(sort));
    let sl = set[set.length-2];

    for(i=0; i<array.length; i++){
        if(array[i] === sl){
            result.push(array[i])
        }
    }

    console.log(result)
}

allSecondLargest([7, 8, 8, 9, 10, 10, 5, 6]);
allSecondLargest([3, 1, 4, 4, 2, 2, 5, 5, 5]);