// Sample Input 
// 4
// Sample Output

// * * * *
// *     *
// *     *
// * * * *

let n = 4;
for(i=1; i<=n; i++){
    let str = ""
    for(j=1; j<=n; j++){
        if(j===1 || j===n || i===1 || i===n){
            str = str + "*" + " ";
        }
        else{
            str = str + "  "
        }
    }
    console.log(str)
}