// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetCapitalized = alphabet.toUpperCase();

function encryptLetter(letter, shift) {

  // Return non-letters as-is
  if (!alphabet.includes(letter) && !alphabetCapitalized.includes(letter)) return letter;

  // This ensures negative shifts still work.
  const updatedShift = ((shift % 26) + 26) % 26;

  // Establish the starting point of the alphabet in ASCII, while preserving upper and lower case
  let base = alphabet.includes(letter) ? "a".charCodeAt(0) : "A".charCodeAt(0);

  //Find the ASCII code of the letter, normalize to a 0-25 range, apply the shift, wrap around so it stays within the alphabet, and convert back to a valid ASCII code.
  let shifted = ((letter.charCodeAt(0) - base + updatedShift) % 26) + base;

  // Convert the final ASCII number back into a character
  let newChar = String.fromCharCode(shifted);

  // Return the encrtyped character
  return newChar;
}

function encrypt(message, shift) {
  let encryptedMessage = "";
  let counter = 0;

  // After every two characters in the encrypted string, insert a random letter from alphabet. Otherwise, add the encrtyped letter to the message.
  for (let i = 0; i < message.length; i++) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (counter === 2) {
      encryptedMessage += randomLetter;
      counter = 0;
    }
    encryptedMessage += encryptLetter(message[i], shift);
    counter++;
  }

  return encryptedMessage;
}

function decrypt(encryptedMessage, shift) {
    // Remove the random letters inserted after every two characters
    let filtered = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
        if (i % 3 !== 2) filtered += encryptedMessage[i];
    }
    // Shift characters back by shiftValue to retrieve original text
    let decryptedMessage = "";
    for (const char of filtered) {
        decryptedMessage += encryptLetter(char, -shift);
    }
    return decryptedMessage;
}



