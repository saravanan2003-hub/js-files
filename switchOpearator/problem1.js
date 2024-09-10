let age = 40;
switch(age){
    case age<5:
        console.log("ticket is free");
        break;
    case age>5 && age<12:
        console.log("ticket is 10 rupees");
        break;
    case age>13 && age<64:
        console.log("ticket is 20 rupepes");
        break;
    case age>64:
        console.log("ticket is 15 rupees")
    default:
        console.log("invalid request")

}