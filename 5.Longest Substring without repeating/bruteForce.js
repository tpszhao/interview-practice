// this uses the two pointer technique
const lengthOfLongestSubstring = (s) => {
  const length = s.length;
  if (length < 2) {
    return length;
  }
  let p1 = 0;
  let p2 = 1;
  let existingCharacters = {};
  existingCharacters[s[p1]] = true;
  let maxLength = 1;
  let currentSubstringLength = 1;

  while (p2 < length) {
    const characterToCheck = s[p2];
    console.log({ start: s[p1], characterToCheck, p2 });

    if (!existingCharacters[characterToCheck]) {
      existingCharacters[characterToCheck] = true;
      currentSubstringLength++;
      maxLength = Math.max(currentSubstringLength, maxLength);
      p2++;
    } else {
      currentSubstringLength++;
      while (p1 <= p2) {
        const startingCharacter = s[p1];
        currentSubstringLength--;
        p1++;
        if (startingCharacter === characterToCheck) {
          break;
        } else {
          existingCharacters[startingCharacter] = false;
        }
      }
      p2++;
    }
  }
  return maxLength;
};

lengthOfLongestSubstring(examples);
