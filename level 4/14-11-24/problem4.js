function diamond(n){
    for(i=1; i<=n; i++){
        let str = "";
        for(j=0; j<=n-i; j++){
            str = str + " ";
        }
        for(k=1; k<=i; k++){
            if(k===1 || k===i){
                str = str + "*" + " "
            }
            else{
                str = str + "  "
            }
            
        }
        console.log(str);
    }
    for(i=1; i<=n-1; i++){
        let str1 = ""
        for(j=0; j<=i; j++){
            str1 = str1 + " ";
        }
        for(k=1; k<=n-i; k++){
            if(k===1 || k === n-i){
                str1 = str1 + "*" + " "
            }
            else{
                str1 = str1 + "  "
            }
        }
        console.log(str1);
    }
}
diamond(6)