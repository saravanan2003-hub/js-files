function printPrimesInRange(m, n) {
    var array = [];
   let isCheck=true;
   for(i=m;i<=n;i++){
    if(i>=2){
        let isPrime=true;
        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime=false;
            }
        }
        if(isPrime){
            array.push(i);
            isCheck=false;
        }
    }
   }
   console.log(array.join(","));
   if(isCheck){
    console.log("this no prime number")
   }

}
printPrimesInRange(8, 10)







