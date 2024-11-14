function bill(usage){
        let price =0;
    for(i=1; i<=usage; i++){
        if(i<=100){
            price += 8;
        }
        else if(i<=300 && i>=101){
            price += 12
        }
        else{
            price += 15
        }
    }
    console.log(price);
}
bill(50);
bill(350);

