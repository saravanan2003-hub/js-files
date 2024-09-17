//Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

let days_until_festival = [30, 15, 45, 10, 25];
let temp = days_until_festival[0];

for(i=0; i<days_until_festival.length; i++)
{
    if(days_until_festival[i] < temp)
    {
        temp = days_until_festival[i];
    }


}
console.log(temp);

