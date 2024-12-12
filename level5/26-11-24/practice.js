let arr=[5,7,10,90,2,5]
let target=22;
let n=arr.length;
let map=new Map();
for(i=0;i<n-1;i++){
  for(j=i+1;j<n;j++){
    let sum=arr[i]+arr[j];
    let req=target-sum;
    if(map.has(req)){
      const pairs=map.get(req)
      for(const pair of pairs){
        if(pair[1]<i){
          console.log(pair[0],pair[1],i,j);
        }
      }
    }
    if(!map.has(sum)){
      map.set(sum,[])
    }
    map.get(sum).push([i,j])
  }
}
    
