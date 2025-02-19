// function lcm(a,b){
//   let c= a*b;
//   for(i=2; i<c; i++){
//     if(i%a == 0 && i%b==0 ){
//       return i;
//     }
//   }
// }
// console.log(lcm(120,70));


// function gcd(a,b){
//   let max = Math.min(a,b);
//   while(max>0){
//     if(a%max ===0 && b%max==0){
//       return max
//     }
//     max--
//   }
// }
// console.log(gcd(20,40));


// let isprime = true;
// function prime(n){
//   if(n<=1){
//     isprime = false
//   }
//   else{
//     for(i=2; i<=Math.sqrt(n); i++){
//       if(n%i===0){
//         isprime = false
//       }
//     }
//   }

//   if(isprime){
//     console.log("yes");
//   }
//   else{
//     console.log("no");
    
//   }
// }
// prime(51)

////////////// dimond pattern /////

// let n = 30;
// for(i=1; i<=n; i++){
//     let str = "";
//     for(j=1; j<=n-i; j++){
//         str += " "
//     }
//     for(k=1; k<=i*2-1; k++){
       
//         str+= "*"
    
//     }
//     console.log(str);
// }

for(i=1; i<=n-1; i++){
    let str = "";
    for(j=1; j<=i; j++){
        str+=" ";
    }
    for(k=1; k<=(n-i)*2-1; k++){
        str += "*"
    }
    console.log(str);
    
}


// let a = "The quick brown fox jumps over the lazy dog";
// let arr = a.split(" ");
// let len = [];
// for(i=0; i<arr.length; i++){
//   let le = arr[i].length;
//   len.push(le);
// }
// let max = 0;
// let index = 0
// for(i=0; i<len.length; i++){
//     if(len[i]>=max){
//         max = len[i];
//         index = i 
//     }
// }
// console.log(arr[index])


// function arrayChunking(arr, a){
//     let n = Math.floor(arr.length/a);
//     let main = [];
//     for(i=0; i<n; i++){
//         let spl = arr.splice(0,n-1);
//         main.push(spl);
//     }
//     console.log(main);
// }

// arrayChunking([1, 2, 3, 4, 5, 6], 2)


