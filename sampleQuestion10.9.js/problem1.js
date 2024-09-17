function sumNumbers(n)
{
    let a = 1;
    let b = 0;
    while(a<=n){
    b = b+a;
    a++;
    }
    return b;
}
let result = sumNumbers(10);
console.log(result);
