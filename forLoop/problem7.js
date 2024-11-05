function fibonacci(n){
    let n1 = 0;
    let n2 = 1;
    
    for(i=1; i<=n; i++){
        console.log(n1);
        let result = n1 + n2;
        n1=n2;
        n2=result;
        
    }
  
}
fibonacci(10);