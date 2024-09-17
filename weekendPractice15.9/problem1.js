function classifyNumber(n){
    if(n%3==0 && n%5==0){
        console.log("the number divisible by both");
    }
    else if(n%3==0){
        console.log("the number divisible by 3");
    }
    else if(n%5==0){
        console.log("the nnumber divisible by 5");   
     }
    else{
        console.log("not divisible by both");
    }
    
    return n;
}

classifyNumber(15);