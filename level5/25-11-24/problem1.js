// Given an two arrays, given to Set Union on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].  Result [3, 1, 5, 7, 8, 10, 11]

let array1 = [3, 1, 5, 7, 8];
let array2 = [5, 1, 8, 10, 11];

let Result = [];

for(i=0; i<array1.length; i++){
   if(!Result.includes(array1[i])){
        Result.push(array1[i]);
   }   
}

for(i=0; i<array2.length; i++){
    if(!Result.includes(array2[i])){
         Result.push(array2[i]);
    }   
 }

 console.log(Result);
