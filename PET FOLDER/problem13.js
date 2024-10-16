let name = "Shanmugavel";
let b = name.split('');

let str = "";


for(i=0; i<b.length; i++){
    if(b[i] == "a" || b[i]=="e" || b[i]== "i"|| b[i] == "o" || b[i]=="u" || b[i] == "A" || b[i]== "E" || b[i] == "I" ||  b[i]== "O" || b[i]== "U") {
        str = str + b[i]
    }
}
// console.log(count);
// let c = str.split('')
// let d = c.reverse();
// let e = d.join();
// let f = e.slice(0);
// console.log(e);

// // console.log(str);
// console.log(h);

console.log(str)