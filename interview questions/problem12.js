let a = "aabbccddaaeeeughf"
let obj = {}
let sort = a.split("").sort().join("")
for(let i=0; i<sort.length; i++){
   if(obj[sort[i]]){
       obj[sort[i]] +=1
   } 
   else{
       obj[sort[i]] = 1
   }
}
let result = ""
for(const e of Object.keys(obj)){
    result += e
    if(obj[e]!=1){
        result +=obj[e]
    }
}
console.log(result)


