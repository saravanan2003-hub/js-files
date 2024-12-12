
const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let leftMax = [array[0]]; // Initialize leftMax with the first element

for (let i = 1; i < array.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], array[i]); // Update leftMax array
    console.log(leftMax[i]); // Print the current leftMax value
}

