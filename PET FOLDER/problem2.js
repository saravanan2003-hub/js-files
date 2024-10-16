function a(n){
let sum = 0;
for(i=0; i<n.length; i++){
    if(n[i]%2!==0){
    sum = sum + n[i]
    }
}
if(sum%3==0){
   return true;
}
else{
    return false;
}
}
let n = [1,2,3,4,5,6,7,8];
console.log(a(n));