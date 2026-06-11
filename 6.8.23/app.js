// You are given a positive integer number `n`, where it is less than 100 (excluded).

// For every number up to `n` (included):
// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `fizzBuzz` using JavaScript that solves the above problem and satisfies the conditions.

// Pseudocode:
// 1. Define a function `fizzBuzz` that takes a positive integer `n` as an argument.
// 2. Check if `n` is less than 100, if not, print "Error" and return.
// 3. Loop through numbers from 1 to `n` (inclusive).
// 4. For each number, check the following conditions:
//    a. If the number is divisible by both 3 and 5, print "FizzBuzz".
//    b. Else if the number is divisible by 3, print "Fizz".
//    c. Else if the number is divisible by 5, print "Buzz".
//    d. Else, print the number itself.

function fizzBuzz(n) {
    if (!Number.isInteger(n) || n < 1 || n >= 100) {
        console.log("Error");
        return;
    }
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// You are given a string `word` consisting of alphabetical characters.

// For each unique letter in the `word`:

// - Return the lower-case letter followed by the number of times it occurs in the `word`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `letterOccurrence` using JavaScript that solves the above problem and satisfies the conditions.

// Pseudocode:
// 1. Define a function `letterOccurrence` that takes a string `word` as an argument.
// 2. Check if `word` is a valid string, if not, print "Error" and return.
// 3. Convert the `word` to lower-case to ensure case-insensitivity.
// 4. Create an object to store the count of each letter.
// 5. Loop through each character in the `word` and update the count in the object.
// 6. Loop through the keys of the object and print each letter followed by its count.

function letterOccurrence(word) {
    if (typeof word !== "string") {
        console.log("Error");
        return;
    }
    
    word = word.toLowerCase();
    let letterCount = {};
    
    for (let char of word) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }
    for (let letter in letterCount) {
        console.log(`${letter}${letterCount[letter]}`);
    }
}