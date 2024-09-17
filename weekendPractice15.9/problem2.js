function getDayName(day){
    switch(day){
        case 1:
            result  = "monday";
            break;
        case 2:
            result = "thusday";
            break;
        case 3:
            result = "wednesday";
            break;
        case 4:
            result = "thursday";
            break;
        case 5:
            result = "friday";
            break;
        case 6:
            result = "saturday";
            break;
        case 7:
            result = "sunday";
        default:
            result = "invalid request";
            break;

    }
    return result;
}
console.log(getDayName(4));