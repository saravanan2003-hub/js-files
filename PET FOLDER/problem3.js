function line(a,b){
    let array = [];
    let array2 = [];
    for(i=a; i<=b; i++){
        array.push(i);
    }
    console.log(array);
   for(i=array.length-1; i>=0; i--){
        array2.push(array[i])
   }
    console.log(array2);
}
let a = 10;
let b = 20;
line(a,b);