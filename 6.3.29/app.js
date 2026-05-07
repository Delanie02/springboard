// Step 1: Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.
const randomDecimal = Math.random()

// Step 2: Determine the desired range of numbers for our secret shift value, which is between 3 and 33.
const desiredRange = 33 - 3 + 1; // 31

// Question 1: Why did we add 1 to the difference between 33 and 3?
// We added 1 to the difference between 33 and 3 because when we calculate the range of numbers, we need to include both endpoints (3 and 33). The formula for calculating the range is (max - min + 1) to ensure that we account for all possible values in the range, including the maximum value. If we didn't add 1, we would only get a range of 30 numbers (from 3 to 32), excluding 33.

// Step 3: Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.
const randomInRange = randomDecimal * desiredRange; // This will give us a number between 0 and 31 (exclusive)

// Question 2: How does multiplying randomDecimal by range help us get a number within our desired range?
// Multiplying randomDecimal by the desired range helps us scale the random decimal number to fit within the range of possible values. Since randomDecimal is between 0 and 1, when we multiply it by the desired range (31), we get a new number that is between 0 and 31 (exclusive). This allows us to effectively map the random decimal to our desired range of numbers.

// Step 4: Round down the decimal number obtained in Step 3 to get a whole integer.
const roundedValue = Math.floor(randomInRange);

// Question 3: Why do we use the Math.floor() function instead of other rounding methods like Math.round()?
// We use Math.floor because it always rounds down to the nearest whole integer, which ensures that we do not exceed our desired range. If we were to use Math.round(), it could round up and potentially give us a value of 31, which is outside our desired range of 3 to 33. By using Math.floor(), we guarantee that the maximum value we can get is 30, which when we add 3 later, will give us a maximum shift value of 33.

// Step 5: Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.
const shiftValue = roundedValue + 3; // This will give us a number between 3 and 33 (inclusive)

// Question 4: How does adding 3 to randomInt ensure that our final shiftValue is between 3 and 33?
// Adding 3 to the rounded value ensures that our final shiftValue is between 3 and 33 because the rounded value can only be between 0 and 30 (inclusive). By adding 3, we shift the entire range up by 3, resulting in a final range of 3 to 33 (inclusive). For example, if the rounded value is 0, adding 3 gives us 3; if the rounded value is 30, adding 3 gives us 33. This way, we ensure that all possible values for shiftValue are within the desired range.