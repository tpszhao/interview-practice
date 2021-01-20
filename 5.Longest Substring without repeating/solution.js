const lengthOfLongestSubstring = (s) => {
  const length = s.length;
  if (length < 2) {
    return length;
  }
  let p1 = 0;
  let p2 = 1;
  let previousCharacterPosition = {};
  previousCharacterPosition[s[p1]] = p1;
  let maxLength = 1;
  while (p2 < length) {
    const currentCharacter = s[p2];
    const previousPosition =
      previousCharacterPosition[currentCharacter] === undefined
        ? -1
        : previousCharacterPosition[currentCharacter];
    previousCharacterPosition[currentCharacter] = p2;
    if (p1 <= previousPosition && previousPosition < p2) {
      p1 = previousPosition + 1;
    } else {
      maxLength = Math.max(maxLength, p2 - p1 + 1);
    }
    p2++;
  }
  return maxLength;
};

const inputs = ["abcabcbb", "aaaaaaa", "pwwkew", "au"];

inputs.forEach((s) => console.log(lengthOfLongestSubstring(s)));
