function collatzLength(n) {
    let count = 1; // Start at 1 to include 'n' itself
    while (n !== 1) { // Continue until n reaches 1
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        count++; // Increment step count
    }
    return count;
}

function longestCollatz(limit) {
    let maxLength = 0;
    let maxNumber = 0;

    for (let i = 1; i < limit; i++) {
        let length = collatzLength(i);
        if (length > maxLength) {
            maxLength = length;
            maxNumber = i;
        }
    }

    return maxNumber;
}

// Run the function with the given limit
const LIMIT = 1000000;
console.log("The number under", LIMIT, "that produces the longest Collatz sequence is:", longestCollatz(LIMIT));
