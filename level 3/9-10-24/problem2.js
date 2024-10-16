// Print the below pattern of ‘*’ if n = 3

//    *

//   * *

//  * * *


let n = 3;
for(i=1; i<=n; i++){
let str = "";
    
    for(j=1; j<=n-i; j++){
        str = str + " "
    }
    for(k=1; k<=i*2-1; k++){
        str = str + "*";  
    }
    console.log(str);
}




