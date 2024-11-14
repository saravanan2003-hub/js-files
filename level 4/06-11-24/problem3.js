// Given array two arrays student names and scores, return the student name who has the maximum score eg 
// names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function score(names, scores){
    var maxScore = scores[0];
    for(i=0; i<scores.length; i++){
        if(maxScore<scores[i]){
            maxScore = i;
        }
    }
    return names[maxScore]
}

 let names=["sanjay", "priya", "ramesh", "sanjana"];
let scores = [88, 45, 71, 91];
console.log(score(names, scores));

// let fruits = ["banana", "apple", "orange", "mango"];
// fruits.sort();

// console.log(fruits);  
