// Given an array of Integers identify the maximum occurring element. Eg: 
// [5,5,4,1,1,1,6,7,8], answer is 1

let array = [5,5,4,1,1,1,6,7,8,5];
let obj = {};

for(i=0; i<array.length; i++){
    if(obj[array[i]]){
        obj[array[i]] +=1
    }
    else{
        obj[array[i]] = 1
    }
}
console.log(obj);
let maxCount = 0;
let maxValue = null;
for(element of Object.keys(obj)){
    if(obj[element]>=maxCount){
        maxCount = obj[element]
        maxValue = element
    }
}

// let main = [];
// for(a of Object.keys(obj)){
//     let c = [];
//     c.push((obj[a]));
//     c.push(a)
//     main.push(c);
// }
console.log(main);
console.log(maxValue);
