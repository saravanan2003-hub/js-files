//Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers

let soldiers = [120, 300, 250, 180, 150];
let temp = 0;
for(i=0; i<soldiers.length; i++)
{
    if(soldiers[i]>temp){
        temp = soldiers[i];
    }
    
}
 console.log(temp);