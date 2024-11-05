// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"]
// output is Abraham



function big(array){
   let len = array[0].length
   let nam = 0;
    
   for(i=0; i<array.length; i++){
    if(len<array[i].length){
        len = array[i].length;
        nam = array[i];
          
    }
   }
   return nam;
}
let array = ["Ram", "Abraham", "Peter", "saravanan"];
console.log(big(array));