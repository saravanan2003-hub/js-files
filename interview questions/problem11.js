let array =  ["ACB", "BDC", "CED", "DEF"];
let obj = {};
for(let i=0; i<array.length; i++){
    let split = array[i].split("");

     let final = []
    for(j=1;j<split.length;j++){
        let val=split[j].charCodeAt()-split[j-1].charCodeAt()
        
        final.push(val)
    }
    
    
    let str=final.join(",")

    
    if(obj[str]){
        obj[str].push(array[i])
    }
    else{
        obj[str] = [array[i]]
    }
 

    
}
for(const element of Object.values(obj)){
    
    if(element.length==1){
        console.log(element[0])
    }
    
}
 

    
    

