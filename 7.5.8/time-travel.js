/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2024-03-15";
travelDate = "2024-03-16";

/*
 * Observations:
 * You cannot reassign the travelDate variable because it was declared using const. Const doesn't allow for reassignment on primitive types, and a string is a primitive type. As such, it produces an "Uncaught TypeError: Assignment to constant variable."
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);
var timeMachineModel = "T-800";

/*
 * Observations:
 * Nothing happened. I was expecting to see "undefined" in the console based on the video (since var declarations are run first before the initializaiton). I'm not sure why.
 */
