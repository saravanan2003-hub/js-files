//Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.

let landing_times = [12, 15, 12, 18, 20];
let temp = landing_times[0];

for(i=0; i<landing_times.length; i++)
{
    if(landing_times[i]==temp)
    {
        console.log(`index of ${landing_times[i]} is same`);
    }
    
   
}