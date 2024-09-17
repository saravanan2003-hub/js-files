//Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations = [50, 60, 70, 80, 90];
let temp = 0;
for(i=0; i<populations.length; i++){
    temp = populations[i] + temp
    average = temp/populations.length;
}
console.log(average)