// Implement the bubblesort algorithm for an array of integers

// let array = [70, 48, 30, 56, 78, 100, 3,78, 23,6];

let array = ["sudharsan", "bala", "saravanan", "senthil",  "harish", "keer"];
for(j=0; j<array.length; j++){
    for(i=0; i<=array.length; i++){
       if(array[i]>=array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp; 
       }
    }
}
console.log(array);
