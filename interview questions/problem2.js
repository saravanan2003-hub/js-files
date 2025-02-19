// longestConsecutive([100, 4, 200, 1, 3, 2]); // Output: 4 (because [1,2,3,4] is the longest)
let array = [10, 5, 12, 3, 55, 30, 4, 11, 2];
array.sort((a,b) => a-b);
let count = 1;
for(i=0; i<array.length-1; i++){
    if(array[i] - array[i+1] == -1){
        count += 1
    }
    else{
        break;
    }
}
console.log(count)