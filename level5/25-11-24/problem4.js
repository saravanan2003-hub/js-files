// unique word for example "saro" is unique and "bala" is not unique

let name = "hello";
let spt = name.split('');
let unique = true;
for(i=0; i<spt.length; i++){
    let a = spt[i];
        for(j=i+1; j<spt.length; j++){
            if(a===spt[j]){
                unique = false;
            }
        } 
}
if(unique){
    console.log(true);
    }
else{
    console.log(false)
}
