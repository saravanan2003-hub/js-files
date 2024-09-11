function calculateFactorial(n){

    
    let a = 1;
    let b = 1;
    while(a<=n){
    b = b*a;
    a++;
    }
    return b;
}
let result = calculateFactorial(6);
console.log(result);
