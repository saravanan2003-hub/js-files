
let teamScore = 150;
let targetScore = 145;
let oversLeft = 0;
dlMethod(teamScore,targetScore,oversLeft)
function dlMethod(teamScore, targetScore, oversLeft) {
    // Enter your code here
    if(teamScore>=targetScore)
    {
        console.log("Team wins by DL method");
    }
    
    else if(teamScore<targetScore && oversLeft>0)
    {
        console.log("Match to be continued");
    }
    else
    {
        console.log("Team loses by DL method");
    }
}

let a = 2000;
isLeapYear(a)
function isLeapYear(a) {
    // Enter your code here
    // the variable a should be check if its leap year or not
    if(a%400 == 0 && a%4 == 0)
    {
        console.log("Y");
    }
    else if(a%100 == 0 || a%400 == 0)
    {
        console.log("N")
    }
    else
    {
        console.log("Y")
    }
}



let num = 10;
isEven(num)
function isEven (num) {
    // Enter your code here to print even or not even based 
    // based on the value in num. Don't change the value in num
    if(num%2 == 0)
    {
        console.log("even");
    }
    else
    {
        console.log("not even");
    }
}