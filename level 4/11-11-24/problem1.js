// Given a string count number of distinct vowels in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1
// Explanation: Since o is coming twice, but we need distinct counts so its only 1 Generate Javascript code which will print the result in console.log and generate 5 test cases


let str = "cooaaeei";
let lo = str.toLowerCase();
let spt = lo.split('');
let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0; 

for(i=0; i<spt.length; i++){
    if(spt[i]==="a"){
       count = 1;  
    }
    else if(spt[i]==="e"){
         count1 =1;
    }
    else if(spt[i]==="o"){
         count2 = 1;
    }
    else if(spt[i]==="i"){
         count3 = 1;
    }
    else{
       if(spt[i]==="u"){
         count4 = 1;
       }
    }

   var final = count + count1 + count2 + count3 + count4;
}

console.log(final)


