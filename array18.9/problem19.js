//1.Separate a integer digit by digit using modulo,
//*Print the sum of the digits ,
//*Print the sum of digits multiplied by 2'
//*Print the even numbers and odd numbers in the digits separately


let int = 12345;
let str = int.toString();
let spl = str.split('')
let array = spl.map(Number);
console.log(array);
let temp = 0;
let mul = 1;
let sum = 0;
let str1 = " ";
let str2 = "";

for(i=0; i<array.length; i++)
{
    temp = temp + array[i];
    mul = array[i] * 2;
    sum = sum + mul
    if(array[i]%2==0)
    {
        str1 = str1 + array[i];
    }
    

    if(array[i]%2!==0)
    {
        str2 = str2 + array[i];
        
    }
}
console.log(temp);
console.log(sum);
console.log(str1);
console.log(str2);









