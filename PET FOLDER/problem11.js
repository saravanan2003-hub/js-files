let taskTimes = [150, 75, 200, 90, 120];

let convertedTaskTimes = [];

for (let i = 0; i < taskTimes.length; i++) {
    let minutes = taskTimes[i];
    let hours = Math.floor(minutes / 60); 
    let remainingMinutes = minutes % 60;  
    convertedTaskTimes[i] = `${hours} hours and ${remainingMinutes} minutes`;
}
console.log(convertedTaskTimes);


// let  b = 150 / 60;
// let c  =Math.floor(b)
// console.log(c); 