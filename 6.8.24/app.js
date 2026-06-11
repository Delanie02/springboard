// Provided code: 
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Incorporate the following steps into a single JavaScript file, placing the provided code at the top. Insert your answers to the questions as comments where they appear.

// Step 1: Create a function named `encryptLetter` that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

// Hint 
// - Inside the function, find the index of the letter in the alphabet.
// - Add the shift value to this index.
// - Use the modulus operator to ensure wrapping around the alphabet if necessary.
// - Return the encrypted letter.

function encryptLetter(letter, shift) {
    // Convert the letter to lowercase to match the alphabet
    const lowerLetter = letter.toLowerCase(); 
    // Find the index of the letter in the alphabet
    const index = alphabet.indexOf(lowerLetter);
    // Calculate the new index by adding the shift value and using modulus for wrapping
    const newIndex = (index + shift) % alphabet.length;
    // Return the encrypted letter, preserving the original case
    return alphabet[newIndex];
}

// Step 2: Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

// Hint
// - Use a loop to iterate over each letter in the word.
// - For each letter, call the `encryptLetter` function.
// - Construct the encrypted message.
// - Return the encrypted message.

function encryptMessage(word, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++) {
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

// Step 3: Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

// Hint
// - Inside the function, find the index of the letter in the alphabet.
// - Subtract the shift value from this index.
// - Use the modulus operator to ensure wrapping around the alphabet if necessary. Remember to handle negative values correctly.
// - Return the decrypted letter.

function decryptLetter(encryptedLetter, shift) {
  // Convert the encrypted letter to lowercase to match the alphabet
  const lowerLetter = encryptedLetter.toLowerCase();
  // Find the index of the encrypted letter in the alphabet
  const index = alphabet.indexOf(lowerLetter);
  // Subtract the shift value from this index. Use the modulus operator to ensure wrapping around the alphabet if necessary. Remember to handle negative values correctly.
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  // Return the decrypted letter.
  return alphabet[newIndex];
}

// Step 4: Create a function named `decryptMessage` that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.

// Hint
// - Use a loop to iterate over each letter in the word.
// - For each letter, call the `decryptLetter` function.
// - Construct the decrypted message.
// - Return the decrypted message.

function decryptMessage (encryptedWord, shift) {
    let decryptedMessage = "";
    for (const char of encryptedWord) {
        const decryptedChar = decryptLetter(char, shift);
        decryptedMessage += decryptedChar;
    }
    return decryptedMessage;
}

// Question: If Caesar encrypts the word "BRUTUS" using our encryptMessage function and then decrypts the result using our decryptMessage function, will he get "BRUTUS" back? Why or why not?
// Answer: Yes. If the shift value is the same (3), then encrypting with a shift value of 3 returns euxwxv. Since the decrypt function subtracts the shift value, it returns brutus. 