//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let n = 5;
for(i=1; i<=n; i++){
    let str = "";
    for(j=1; j<=n-i; j++){
        str = str + " ";
    }
    for(k=1; k<=i*2-1; k++){
        str = str + "*" 
    }
    console.log(str)
}
for(i=1; i<=n-1; i++){
    let str1 = ""
    for(j=1; j<=i; j++){
        str1 = str1 + " ";
    }
    for(k=1; k<=(n-i)*2-1; k++){
        str1 = str1 + "*";
    }
    console.log(str1);
}