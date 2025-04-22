function towersOfHonoi(di,s,t,d){
    if(di === 1){
        console.log("Move a disk from " + s + " to " + d);
    }
    else{
        towersOfHonoi(di-1, s, d, t)
        console.log("Move a disk from " + s + " to " + d);
        towersOfHonoi(di-1, t, s, d );
    }
}

towersOfHonoi(10, 1, 2, 3);