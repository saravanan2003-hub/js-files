// Print the Below Pattern if n = 3   
//                          * * *
//                            * *
//                              *

let n = 3;
for(i=0; i<=n; i++){
    str  = "";
    for(j=0; j<=i; j++){
        str = str + " " + " ";
    }
    for(k=0; k<n-i; k++){
        str = str + "*" + " ";
    }
    console.log(str);
}

