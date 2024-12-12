let arr=[1, 2, 2, 3, 4, 4, 5];
let len=arr.length;
let n=[]
for(let i=0;i<len;i++){
    if(!n.includes(arr[i])){
        n.push(arr[i]);
    }
}
console.log(n);






