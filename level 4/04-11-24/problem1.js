// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1

let  array = [4, 5, 1, 2, 5, 3];
let max = array[0];
for(i=0; i<array.length; i++){
    if(max<array[i]){
        max = array[i];
    }
}
console.log(array.indexOf(max));
