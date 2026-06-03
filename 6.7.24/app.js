const friend = "BRUTUS"
const shiftValue = 3;

// Step 1
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2
// Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.

const alphabetLength = alphabet.length; // 26
let encryptedMessage = "";

for (let i = 0; i < friend.length; i++) {
    let letter = friend[i];
    let index = alphabet.indexOf(letter.toLowerCase());
    let newIndex = index + shiftValue;
    let encryptedLetter = alphabet[newIndex % alphabetLength];
    encryptedMessage += encryptedLetter;
}  

console.log(encryptedMessage);

// Question 1: What advantage does using a loop provide over manually encrypting each letter?
// A loop automates the task of encrypting each letter. It allows for scalability, meaning that if the input string changes in length, the loop can handle it without requiring additional code for each letter. 

// Question 2: Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
// The % operator (modulo) is used to wrap around the alphabet when the new index exceeds the length of the alphabet. This ensures that if the shift takes us past 'z', we start back at 'a'. For example, if we shift 'z' by 3, we would get an index of 29, and 29 % 26 would give us 3, which corresponds to 'c'. This allows for a continuous cycle through the alphabet regardless of the shift value.