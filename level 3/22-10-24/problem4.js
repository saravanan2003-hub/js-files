//Given a two positive integers m and n, where m < n, print the sum of all prime numbers between them. For m = 5 and n = 10, 5 and 7 
//are prime numbers between 5 and 10 so the answer is 12

function prime(m,n){
    let isPrime = true;   
    let sum = 0;
    for(i=m; i<=n; i++){
        
        if(i<=1){
            isPrime = false;
        }
        else{
            for(j=2; j<=Math.sqrt(i); j++){
                if(i%j===0){
                    isPrime = false;
                }
            }
        }

        if(isPrime){
            sum = sum + i;
        }
        else{
            isPrime = true;
        }
    }
    console.log(sum);
}

prime(5,10);