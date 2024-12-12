function sqrt(n) {
    if (n < 0) {
        return "NaN"; // Square root of negative numbers is not real.
    }

    let guess = 0;

    // Increment the guess until its square is greater than or equal to n
    while (guess * guess <= n) {
        guess++;
    }

    // Return the previous guess (which was the closest without going over)
    return guess - 1;
}

// Test the function
let number = 16;
let result = sqrt(number);
console.log(`The square root of ${number} is approximately ${result}`);