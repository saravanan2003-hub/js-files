let arr1 = [1,5,7,8];
let arr2 = [2,4,6,65];
let i = 0 , j = 0
let result = [];
while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        result.push(arr1[i])
        i++
    }
    else{
        result.push(arr2[j])
        j++
    }

}

while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
}
console.log(result)