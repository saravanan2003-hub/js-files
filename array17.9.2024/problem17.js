//Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let temperatures = [75, 80, 72, 85, 90];

for(i=0; i<=temperatures.length; i++)
{
    if(temperatures[i] > 80)
    {
        console.log(temperatures[i]);
    }
}