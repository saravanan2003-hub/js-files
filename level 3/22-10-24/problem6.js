function mainfunc(array){

    
    console.log(lcm(array[0] ,array[1]));
    
    
    console.log(gcd(array[2],array[3]))
    

}

function gcd(c,d){
    let max = Math.max(c,d);
    while(max>0){
        if(c%max===0 && d%max===0){
            return max;
        }
        max--;
    }
    }
function lcm(a,b){
    let mul = a*b;
    for(i=1; i<=mul; i++){
        if(i%a===0 && i%b===0){
            return i;
        }
    }
}



mainfunc([10, 15, 20, 30])




