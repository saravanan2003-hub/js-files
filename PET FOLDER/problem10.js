//Input: [1, 2, 3, 4, 5, 6, 7], k = 3 Output: [5, 6, 7, 1, 2, 3, 4]

let array = [1,2,3,4,5,6,7];
let b = 4;
let a = array.splice(b,array.length)
for(i=a.length-1; i>=0; i--){
    let p = a.pop();
    array.unshift(p);

}

console.log(array);