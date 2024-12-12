function findMostFrequent(arr) {
    let mostFrequentElement = arr[0];
    let maxCount = 0;

    // Loop through each element of the array
    for (let i = 0; i < arr.length; i++) {
         currentCount = 0;

        // Count occurrences of the current element
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentCount++;
            }
        }

        // Update the most frequent element if the current count is greatercsd
        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentElement = arr[i];
        }
    }

     //console.log(mostFrequentElement);
       console.log(currentCount);
}

// Example usage
let arr = [2, 4, 2, 2, 6, 7, 7, 7, 7, 1, 2,2];
console.log("Most frequent element is:", findMostFrequent(arr));