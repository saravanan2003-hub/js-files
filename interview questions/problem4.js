// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]  
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]  

// Input: ["listen", "silent", "enlist", "hello", "world"]  
// Output: [["listen", "silent", "enlist"], ["hello"], ["world"]]  

function groupAnagrams(array) {
    let obj = {}
    for(i=0; i<array.length; i++){
       let spl = array[i].split(",");
       let a = spl[0].split("").sort().join("")

        if(obj[a]){
            obj[a].push(array[i]);
        }
        else{
            obj[a] = [array[i]];
        }        
    }
    
    let result = []
    for(let e of Object.values(obj)){
        result.push(e);
    }

    return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
console.log(groupAnagrams(["listen", "silent", "enlist", "hello", "world"]));
console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx"])); 