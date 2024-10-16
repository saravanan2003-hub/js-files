// let n = 3;

// for(i=n; i>0; i--){
//     var str = "";
//     for(j=0; j<n-i; j++){
//         str = str = " ";
        
//     }
//     for(k=0; k<i*2-1; k++){
//         str = str + "*";
//     }
//     console.log(str);
// }


let n = 3; // Number of rows

for (let i = n; i > 0; i--) {
    let str = ""; // Initialize the string for each row

    // Add leading spaces
    for (let j = 0; j < n - i; j++) {
        str += " "; // Add spaces for indentation
    }

    // Add stars
    for (let k = 0; k < i * 2 - 1; k++) {
        str += "*"; // Add stars
    }

    console.log(str); // Print the current row
}
