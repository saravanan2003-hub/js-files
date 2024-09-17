//Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

let water_levels = [30, 50, 20, 40, 60];
let i = 1;
let temp = 0;
do{
    temp = water_levels[0];
    
}
while(i < water_levels.length)
{
    if(water_levels[i]<temp)
    {
    temp = water_levels[i];
   
    }
   i++;
}
console.log(temp);