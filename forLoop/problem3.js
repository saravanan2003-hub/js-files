function tabels(n){
    let mul = 0;
    for(i=1; i<=12; i++){
        mul = i*n;
        console.log(i+ "*" + n + "=" + mul);
    }
    return mul;
}
result = tabels(3);
