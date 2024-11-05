// //Given the value of n print the below pattern n = 3 
// 3 2 1

// 2 1

// 1

let n = 3;
for(i=n; i>0; i--){
    let str = ""
    for(j=i; j>0; j--){
        str = str + j + " "
    }
    console.log(str);
}


