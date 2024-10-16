// Suppose there are 5 workers, each with a different work efficiency. Create an array with their 
//efficiencies (in percentage). Write a program to calculate and print the total percentage
// of work completed if all of them work together.

function sumofeven(n){
    let sum =n;
    for(i=1;i<=n;i++){
        sum=sum+n;
    }
    return sum;

}
let n=5
console.log(sumofeven(n))

