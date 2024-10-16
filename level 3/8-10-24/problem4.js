function gcd(a,b){
let max = Math.max(a,b);
while(max>0){
    if(a%max===0 && b%max==0){
        return max   
    }
    max--;
}
}
console.log(gcd(10,20));