// Input: [2, 3, 4, 2, 3, 5]
// Output: 4 // find the first duplicate number

let array = [2,3,4,2,3,5];
let a = array[0];
for(i=0; i<array.length; i++){
    for(j=0; j<array.length; j++){
        if(array[i]==array[j]){
           console.log(array[i]); 
        }
    }
}






