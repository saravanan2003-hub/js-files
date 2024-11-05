// 1. Print the below patter if n = 3

//           1

//          1 2

//         1 2 3

//          1 2

//           1

let n = 3;
for(i=1; i<=n; i++){
    var str = "";
    for(j=1; j<=n-i; j++){
        str = str + " ";
    }
    for(k=1; k<=i; k++){
        str = str + k + " ";
    }
    console.log(str)
}
for(l=1; l<=n-1; l++){
    str1= ""
    for(m=1; m<=l; m++){
        str1 = str1 + " "
    }
    for(o=1; o<=n-l; o++){
        str1 = str1 + o + " ";
    }
    console.log(str1);

}

