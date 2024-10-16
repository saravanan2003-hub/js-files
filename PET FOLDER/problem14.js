//find the largest word in the sentance

let a = "Saravanan Is Good shanmugvel compare shan";
let b = a.split(' ');
let c = b[0].length;
let d = 0;
for(i=0; i<b.length; i++){
    if(b[i].length>=c){
        c = b[i].length;
        d = b[i]; 
        
    }
}
console.log(d);