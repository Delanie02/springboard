# Technical Skills Survey — Part 2: Helping Caesar's Traditional Secret Party (Beginner-friendly package)

This package contains a step-by-step exercise for learners to implement the Caesar Cipher with an extra twist: after every two characters in the encrypted output, a random letter is inserted. Your task is to implement encryption and decryption functions in JavaScript, and to decrypt the provided secret message.

## Files included
- `starter.js` — starter code (skeleton) for learners.
- `solution.js` — complete solution with detailed comments.
- `test.js` — suggestion for how to run tests in Node.js.
- `README.md` — this file.
- `caesar_exercise.zip` — zipped package (this archive).

## Quick start (student-friendly)
1. Open `starter.js` and implement the two functions: `encrypt(message, shiftValue)` and `decrypt(encryptedMessage, shiftValue)`.
2. Use `solution.js` as a reference if you get stuck — it contains a full, commented solution.
3. To run tests locally you can use Node.js. Example (from terminal):
   - `node` REPL or create a small script to import/require your solution and test sample messages.

## The Secret Message — Decrypted
You were given the encrypted paragraph and asked to decrypt it with shift value **42**.
Below is the encrypted text you were given (unchanged from the assignment):

```
Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.
```

The decrypted plaintext (using the same algorithm assumptions as `solution.js`: noise letters were inserted after every two characters of the encrypted output) is:

```
Seek the midnight shadow of Romulus and Remus. There, whisper the word 'Aurelius' to the winds. The first to unveil it in our Slack channel earns the key to the next quest.
```

> Note: If your encryption counted only alphabetic characters for the "every two characters" rule, you may get a different structure. The provided solution and the decryption above assume the encryption inserted letters after every two output characters (including spaces/punctuation). Make sure your implementation and tests follow the same convention.

## Hints and teaching points
- Normalize the shift using modulo 26: `((shift % 26) + 26) % 26` ensures both large and negative values work as expected.
- Use `char.toLowerCase() !== char.toUpperCase()` to detect alphabetic characters in JS.
- Preserve case by using `'A'.charCodeAt(0)` and `'a'.charCodeAt(0)` as bases.
- When inserting noise letters, be clear whether you count alphabetic characters only or all characters. Keep this consistent between encrypt and decrypt.
- Comment thoroughly: explain what each loop and helper function does.

---
Good luck! Have fun helping Caesar keep his party secret! 🎉
