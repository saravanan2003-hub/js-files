//Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

let landing_times = [12, 15, 12, 18, 20];
let count1 =0;
let f = 0;
while(f<landing_times.length)
{
    for(a=1; a<landing_times.length; a++){
        if(landing_times[f]===landing_times[a]){
            count1 = count1 + 1;
            
            
        }
    }
    f++
}
console.log(`${count1} helicopter landing same`)