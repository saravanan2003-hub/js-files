//Print a number n = 5 n number of times if n = 5 then print 5 5 5 5 5, if n = 3 print 3 3
let str="";
function print(n){
    for(i=1; i<=n; i++){
        str = str + n ;
    }
    return str;
}
console.log(print(10));

