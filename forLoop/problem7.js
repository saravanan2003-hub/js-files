function fibonacci(n){
    let n1 = 0;
    let n2 = 1;
    console.log(n1);
    console.log(n2);
    for(i=1; i<=n; i++)
        {
            
            let result = n1 + n2;
            
            n1=n2;
            n2=result;
            console.log(result);
        }
  
}
fibonacci(10);