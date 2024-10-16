function lcm(a,b,d){
    let c = a*b*d;
    for(i=1;i<=c;i++){
        if(i%a===0 && i%b===0 && i%d===0){
            return i;
            
        }
    }
}
console.log(lcm(10,20,50));