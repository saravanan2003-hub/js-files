// Professor Kishore wanted the kids to learn about Special numbers. (A two- digit number is said to be a special number if the sum of its digits and the product of its digits is equal to the number itself. For example, 19 is a special number. The digits in 19 are 1 and 9. The sum of the digits is 10 and the product of the digits is 9. 10+9=19)

// Can you help Kishore to write a program to find all special numbers between 2 limits m and n (both inclusive)? Assume that m and n are two- digit numbers.
// Input Format
// Input consists of 2 integers m and n
// Output Format
// Refer to the sample output for the output format
// Sample Input 
// 11 
// 19
// Sample Output 
// 19
// Between 11 to 19 only 19 is the special number


function special(m,n){
    for(i=m; i<=n; i++){
       let str = i.toString();
       let spl = str.split('');
       var map = spl.map(Number);
       let sum = map[0] + map[1];
       let mul = map[0] * map[1];
        let sum1 = sum + mul;
       if(sum1==i){
        console.log(i);
       }
    }
    
}
special(10,20);
