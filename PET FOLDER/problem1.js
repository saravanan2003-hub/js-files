function isa(n){
    let b = n.toLowerCase();
    if(b=="a"){
        return true;
    }
    else if(b=="d" || b == "e" || b=="f"){
        return false;
    }
    else{
        return 1;
    }

}
console.log(isa("d"));