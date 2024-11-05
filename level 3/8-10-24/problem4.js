function gcd(a,b){
let max = Math.min(a,b);
while(max>0){
    if(a%max===0 && b%max==0){
        return max   
    }
    max--;
}
}
console.log(gcd(12,18));

