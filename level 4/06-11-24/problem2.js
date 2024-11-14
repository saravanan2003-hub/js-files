// Traverse the array and return the index of the first negative number encountered.




function negative(array){
    for(i=0; i<array.length;i++){
        if(array[i]<0){
            return array[i];
        }
    }
}

let array = [2,4,6,7,8,9,-1, 9, 10, -3];

console.log(negative(array))