const friend = "BRUTUS";
const shiftValue = 3;

// Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2
const firstLetter = friend[0]; // B
const index = alphabet.indexOf(firstLetter.toLowerCase()); // 1

// Question 1
// The index is 1 because the index starts at 0, so 'a' is at index 0, 'b' is at index 1, and so on.

// Step 3
const newIndex = index + shiftValue; // 1 + 3 = 4
const encryptedFirstLetter = alphabet[newIndex]; // 'e'

// Question 2
// The modulo operator is used to wrap around the alphabet when the new index exceeds the length of the alphabet. For example, we can add the shiftValue to an index like 26 (z), and then use modulo to get the remainder of 29 mod26, which gives us 3. We can then use that modulo result to determine the index of our new letter.

// Step 4
const alphabetLength = alphabet.length; // 26

// Step 5
const encryptedLetter = alphabet[newIndex % alphabetLength]; // 'e'

// Step 6
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3); // "EUX"