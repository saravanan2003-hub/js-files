let array = [78, 80, 7, 45, 67, 98, 12, 3, 4];

// let array = ["saravanan" , "maddy", "kavi", "joo", "bala", "harish", "sankar"];
for(j=0; j<=array.length; j++){
    let min = array[j];
        for(i=1+j; i<=array.length; i++){
            if(min >= array[i]){
            min = array[i];

            let temp = array[j];
            array[j] = min ;
            array[i] = temp;
            }
        }
}
console.log(array);