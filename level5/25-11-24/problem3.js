let array = [70, 48, 30, 56, 78, 100, 3,78, 23,6];
let target = 10;

if(array.includes(target)){
    console.log("The number is already have");
}
else{
    array.push(target);
    console.log("push successfully");
}

console.log(array);
