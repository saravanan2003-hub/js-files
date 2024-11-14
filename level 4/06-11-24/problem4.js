function calculateTotal(cart) {
    // Enter your code here
    
    let M = 500; 
    let J = 3000;
    let T = 1500;
    let p = 10;
    var total = 0;
    for(i=0; i<cart.length; i++){
        let spt = cart[i].split('');

        let pro = spt[0];
        var pr = spt[2];

        var price = Number(pr)
        
        
        if(pro === "M"){
            total+= price * M;
        }
        else if(pro === "J"){
            total+= price * J;
        }
        else if(pro === "T"){
            total += price * T;
        }
        else{
            total +=price * p;
        }
         
    }
     console.log(total)
}

let cart = ["P 5", "M 1"];
calculateTotal(cart)
