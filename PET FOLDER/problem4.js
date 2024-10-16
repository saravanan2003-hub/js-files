function array(a,b){
    let array1 = [];
    for(i=a; i<=b; i++){
        if(i%2==0){
            array1.push(i);
        }
    }
    for(i=a; i<=b; i++){
        if(i%2!==0){
            array1.push(i);
        }
    }
    return array1;

}
console.log(array(13,18));