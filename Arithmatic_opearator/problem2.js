function checkDay(num){
    if(num>=2 && num<=6){
        return ("weekdays");
    }
    else if(num === 1 || num ===7){
        return ("Weekend");
    }
    else{
        return ("unvalid input");
    }

}

console.log(checkDay(1))