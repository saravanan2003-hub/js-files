let array = [70, 48, 30, 56, 78, 100, 3,78, 23,6];
let swapped;

do{
    swapped = false
    for(i=0;i<array.length; i++){
        if(array[i]>array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            swapped = true;
        }
    }
}
while(swapped);
console.log(array);