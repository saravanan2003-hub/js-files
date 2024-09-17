//A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.


let batteryLevel = 20;
let i = 1;
while(i<=20)
    {
        if(batteryLevel<=20){
        console.log("battery is low");
        }
        i++;
    } 