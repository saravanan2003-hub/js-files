//Find the second maximum in an array of integers

let array = [10, 51, 100, 212, 12, 200];
let first = array[0];
let second = 0;

for(i=0; i<=array.length; i++){
    if(first<array[i]){
        first = array[i]
    }
}
for(j=0; j<=array.length; j++){
    if(second<array[j] && first>array[j]){
        second = array[j]
    }
}
console.log(second);