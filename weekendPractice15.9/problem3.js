function printMultiplicationTable(n,r){

    
    for(i=1; i<=6; i++){
        let result = n * r;
        console.log(`${n}*${r}=${result}`);
        r--;
    }

    
    

}
printMultiplicationTable(5,6);