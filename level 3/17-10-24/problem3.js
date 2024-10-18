function sumOfFactorials(N){
    var sum =0;
    for(i=N; i>0; i--){
        
        var factorial = 1;
        for(j=1; j<=i; j++ ){
           factorial = j * factorial;
           
           
        }
       sum = sum + factorial;
      
    }
    console.log(sum);
}

sumOfFactorials(5)