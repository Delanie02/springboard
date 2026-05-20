const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS");

// Question 1: How can you verify that "BRUTUS" was added to the beginning of the array?
// Answer: You can verify that "BRUTUS" was added to the beginning of the array by checking the first element of the array in the console. You can do this by accessing the element at index 0, like this: `guests[0];`. If it prints "BRUTUS", then you have successfully added it to the beginning of the array.

guests.push("AUGUSTUS", "LUCIA");

const spartacusIndex = guests.indexOf("SPARTACUS");

// Question 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
// Answer: If "SPARTACUS" wasn't invited, the value of spartacusIndex would be -1. This is because the indexOf method returns -1 when the specified element is not found in the array.

const cassiusIndex = guests.indexOf("CASSIUS");
guests.splice(cassiusIndex, 1);

const firstThreeGuests = guests.slice(0, 3);

const sortedGuests = guests.slice(1); // Creates a copy of the guests list, minus the first guest.
const firstGuest = guests[0]; // Creates a variable to hold the first guest, which is "BRUTUS".
sortedGuests.sort(); // Sorts the copied list of guests in alphabetical order.
const updatedList = [firstGuest, sortedGuests]; // Combines the first guest with the sorted list of guests into a new array. 
// Could also use the firstGuest.concat(sortedGuests) method to combine the two arrays into a single array, instead of a nested array.