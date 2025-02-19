// Matrix Addition using 2d Integer array

let a = [[1, 2],[3, 4]];

let b = [[3, 4],
        [1, 2]];

if(a.length === b.length && a[0].length === b[0].length){
    var main = []
    for(i=0; i<a.length; i++){
        let array = [];
        for(j=0; j<a[0].length; j++){
            var sum =  a[i][j] + b[i][j];
           array.push(sum);
        }
        main.push(array);
    }
}
else{
    console.log(false);
}

console.log(main);



