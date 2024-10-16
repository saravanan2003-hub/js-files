//Write a program to check if the character is a vowel, print "The character is a vowel.
//" If the character is a consonant, print "The character is a consonant." Make sure to handle both 
//upper and lower case letters. A vowel is a character which is any of letters a, e, i, o, u. 
//Any letter which is a not a vowel is considered a consonant.

let b = "a";
if(b == "a" || b=="e" || b=="i" || b=="o" || b=="u" || b=="A" || b=="E" || b=="I" || b=="O" || b=="U"){
    console.log("The character is vowel");
}
else{
    console.log("The charecter is consonent");
}


//Given three numbers a, b, c print the maximum number amongst the three.
let a =10;
let b1 = 30;
let c = 5;

if(a>b1 && a>c){
    console.log(a);
}
else if(b1>a && b1>c){
    console.log(b1);
}
else {
    console.log(c);
}

// Write a program to generate the following series 1, 3, 5, 7, 9, 11....up until the nth term
//if n = 4, print the first 4 odd numbers 1 3 5 7

function series(n){
    let sum  =1;
    for(i=1; i<=n; i++){
        console.log(sum);
        sum = sum + 2;
        
    }
    
}
series(4);

//If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount over 10 days.
//Day 1: 5%
//Day 2: 7% (5% + 2%)
//Day 3: 9% (7% + 2%)...
//Day 10: Calculate this using a loop.
//Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. 
//The challenge is to use a single loop to accumulate the total discount percentage over the 10 days.

function discount(days){
    let initialDiscount = 5;
    let dailyIncrease = 2;
    
    for(i=1; i<days; i++){
        initialDiscount = initialDiscount + dailyIncrease; 
    }
    return initialDiscount;
}
 let result = discount(10);
 console.log(`final discount is ${result}`);

 //. Complete the program printAllMultiplesOf5Bet(a, b)
//eg, printAllMultiplesOf5Bet(10, 30) in reverse
//30
//25
//20
//15
//10

let stratingNumber = 30;
let endingNumber = 10;

while(stratingNumber>=endingNumber){
    if(stratingNumber%5==0){
        console.log(stratingNumber);
    }
    stratingNumber--;
   
}

// //find mulplication 15 to 29

let sn  = 29;
let en = 18;
for(i=sn; i>=en; i--){
    if(i%3==0){
        console.log(i);
    }

}

//Given an array of strings count the number of elements which are starting with a vowel


let names = ["apple", "orange", "pineapple"];

for(i=0; i<names.length; i++){
  if(names[i][0]=="a" || names[i][0]=="e" || names[i][0] == "i" ||names[i][0]=="o" || names[i][0]== "A" || names[i][0]=="E"|| names[i][0]=="O" || names[i][0]=="I" || names[i][0]=="U"){
    console.log(names[i]);
  } 
}

//Given an array of float find the average of the numbers.


