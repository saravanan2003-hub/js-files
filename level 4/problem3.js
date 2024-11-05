//Count the number of occurrences of a string s2 in a string s1. For example s1 = "This is a String" s2 = "is", number of occurences is 2. 

let string = "This is a Missed String";
let count = 0;

let array = string.split(" ");
for(i=0; i<array.length; i++){
    let checkElement = array[i];
    let isInclude = checkElement.includes("is");
    if(isInclude){
        count = count + 1;
    }
}
console.log(count);

