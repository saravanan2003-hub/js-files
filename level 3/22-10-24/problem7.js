function mainfunc(array){
    let array1= [];
    for(i=0; i<=array.length; i++){
        if(array[i]%2===0){
            array1.push(array[i]);
        }
    }
    console.log(lcm(array1[0] , array1[1]))
}

function lcm(a,b){
    let mul = a*b;
    for(i=1; i<=mul; i++){
        if(i%a===0 && i%b===0){
            return i;
        }
    }
}

mainfunc([10,13,15,16,20,30])