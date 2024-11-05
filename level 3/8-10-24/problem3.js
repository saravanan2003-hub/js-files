function lcm(a,b,d){
    let c = a*b*d;
    for(i=1;i<=Math.sqrt(c);i++){
        if(a%i===0 && b%i===0 && d%i===0){
            return i;
            
            
        }
    }
}
console.log(lcm(10,20,50));