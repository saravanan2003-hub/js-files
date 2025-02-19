let i = 1;
function pattern(n){
    if(n<0){
        return -1;
    }

    if(n === 0){
        return -1;
    }
    else{
        
        pattern(n-1);
    }
}

