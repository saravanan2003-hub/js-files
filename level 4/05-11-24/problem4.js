// Case-Insensitive Search: For an array of strings, modify the linear search to perform a case-insensitive 
// search for the target string.

let array = ["Apple", "banana", "Cherry", "date", "Elderberry"];

let target = "date";
let lower = target.toLowerCase();

for(var i=0; i<array.length; i++){
    if(target===array[i]){
        console.log(i);
    }
}
