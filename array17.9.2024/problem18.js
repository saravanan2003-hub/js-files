//Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students.

let students_per_route = [45, 55, 30, 60, 40];
let bus_hold_members = 50;
let sum =0;

for(i=0; i<students_per_route.length; i++)
{
    sum = sum + students_per_route[i];
}
    let Total_bus = sum/bus_hold_members;

 let roundup = Math.ceil(Total_bus)
console.log(roundup);

