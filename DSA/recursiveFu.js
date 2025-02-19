let a = 0;
let b = 1;
function fib(n){
    if(n<0){
        return -1;
    }
    if(n===0){
        return null;
    }
    else{
        console.log(a);
        let sum = a + b;
        a = b;
        b = sum;
        fib(n-1)
    }
}

fib(8)