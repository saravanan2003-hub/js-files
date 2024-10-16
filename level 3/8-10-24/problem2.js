let a = 169;
let isPrime = true;
function Prime(){
    if(a<=1){
       isPrime = false;
    }

    else {
        for(i=2; i<=Math.sqrt(a); i++){
            if(a%i==0){
                isPrime = false;
            }
        }
    }

    if(isPrime){
        console.log("Prime");

    }
    else{
        console.log("Not Prime");
    }
}

Prime();