function mainfunc(array){
    let array1= [];
    for(i=0; i<array.length; i++){
        if(array[i]%2!==0){
            array1.push(array[i]);
        }
    }
    console.log(gcd(array1[array1.length-2] , array1[array1.length-1]));
    
   
    
}

function gcd(a,b){
    let max = Math.max(a,b);
    while(max>0){
        if(a%max===0 && b%max===0){
            return max;
            
        }
        max--;
    }
}

mainfunc([10,13,15,16,20,30,11,17,19])

document.getElementById
DeviceMotionEvent.appent