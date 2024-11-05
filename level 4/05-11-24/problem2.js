// In an array of string, return all the string which start with the letter 'a' (Case insensitive) 
// for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali




function includeA(array){
    let arr = []
    for(i=0; i<array.length; i++){
        let spt = array[i].split('');
        if(spt[0]==="a" || spt[0]==="A"){
           arr.push(array[i]);
        }
    }
    let join = arr.join(", ");
    return join;
}

let array = ["apple", "Ali", "mango","Brush"];
console.log(includeA(array));

