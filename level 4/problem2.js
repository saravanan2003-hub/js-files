//Print the different between the maximum and minimum element in a given array. 


let array = [100, 200, 300, 60, 500];

let max = array[0];
let min = array[0];
for(i=0; i<=array.length; i++)
{
    if(max<array[i]){
        max = array[i];
    }
}
for(j=0; j<=array.length; j++){
    if(min>array[j]){
        min = array[j]
    }
}

let different = max - min;
console.log(different)
