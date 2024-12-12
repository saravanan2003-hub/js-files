let array = [40, 6, 30, 10, 6, 8, 2];
for(i=1; i<array.length; i++){
    let temp = array[i];
    let j = i-1;

    while(j>=0 && array[j]>temp){
        array[j+1] = array[j];
        j--;
    }
    array[j+1]=temp;
}
console.log(array);
    

