let a = 5;
let b = 2;
let c = 1;
let ans = (a&b)|(b&c);
console.log(ans);

let answer=a&b|b&c;
console.log(answer)

let formula=a&(c|b)&c;
console.log(formula);


let  e= a<<2;
let d = (e===20);
console.log(d)


let or = a|b;
let not = ~ or;
console.log(not)