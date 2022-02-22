// Additional Build Specifications
// Convert each word to lowercase before translating.
// If a word starts with a vowel, just add “way” onto the ending.
// If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word.

const translate = (word) => {
  //if the word starts with a vowel... do the stuff
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
  word = word.toLowerCase();
  if (vowels.indexOf(word[0]) !== -1) {
    return word + "way";
  } else {
    // If the first letter isn't a vowel i.e is a consonant
    for (let char of word) {
      // Loop through until the first vowel is found
      if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = word.indexOf(char);
        break;
      }
    }
    // Compose final string
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  }
};
module.exports = translate;
