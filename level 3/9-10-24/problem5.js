let n = 5;

for(i=1; i<=n; i++){
    str = ""
    for(j=0; j<=n-i; j++){
        str = str + "*";
        
    }
    console.log(str);
}