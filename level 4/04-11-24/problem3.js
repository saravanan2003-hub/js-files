//Count Occurrences: Modify the linearSearch function to count the number of times a target element appears in the array
let n = 3;
let array = [1,2,3,3,4,5,5,6];
let count = 0;

for(i=0; i<array.length;i++){
    if(array[i]==n){
        count = count + 1;
    }
}
console.log(count);
