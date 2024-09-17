//Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

let train_departures = [10, 15, 7, 25, 5, 24, 4, 0];
let temp = train_departures[0];
for(i=0; i<train_departures.length ;i++)
{
    if(train_departures[i]<temp)
    {
        temp = train_departures[i];  
    }
   
}
console.log(temp);
