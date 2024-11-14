// Given an array of strings, return the string which has maximum 'a' character present in it.  eg = ["apple", "appeal", "after", "banish"]
//  output is appeal as it has 2 a's in it


function max(array){
    let arr =[];
    for(i=0; i<array.length; i++){
        var spt = array[i].split('');
        var count = 0
            for(j=0; j<spt.length; j++){
                if(spt[j]==="a" || spt[j]==="A"){
                     count = count + 1;

                }
            }
            arr.push(count);
    }

    let max1 = arr[0];
    let int = 0
    for(k=0; k<arr.length; k++){
        if(max1<arr[k]){
            max1 = arr[k];
            

        }

    }
    var res=  arr.indexOf(max1);
    return array[res];
    
}
let array = ["apple", "appeal", "after", "banish", "saravanan"];

console.log(max(array));