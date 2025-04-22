let str = "Saravanan";
let obj = {}
let arr = str.split("")

for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]){
        obj[arr[i]] +=1
    }
    else{
        obj[arr[i]] = 1
    }
}

for(const e of Object.keys(obj)){
    if(obj[e] > 1){
        console.log("false")
    }
}
// console.log(obj)