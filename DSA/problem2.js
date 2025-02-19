class Stack{
    constructor(){
        this.array = [2,3]
    }

    fpush(n){
        if(this.array.length === 0){
            this.array[0] = n;
        }
        else{
            for(let i=this.array.length-1; i>=0; i--){
                this.array[i+1] = this.array[i];
            }
            this.array[0] = n
        }
    }

    fpop(){
        if(this.array.length ===0){
            return null;
        }
        else{
            const popElement = this.array[0];
            for(let i=0; i<this.array.length; i++){
                this.array[i-1] = this.array[i];
            }
            this.array.length = this.array.length-1
            return popElement;
        }
    }

    fpeek(){
        if(this.array.length == 0){
            return;
        }
        else{
            return this.array[0];
        }
    }
}
let stck = new Stack();
stck.fpush(5);
console.log(stck.array);
const a = stck.fpop()
console.log(a);
const b = stck.fpeek();
console.log(b);


