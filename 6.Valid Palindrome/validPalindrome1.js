const nonAlphaNumericRegex = /[^a-zA-Z0-9]/g;

const isPalindrome = (s) => {
  const formattedString = s.replace(nonAlphaNumericRegex, "").toLowerCase();
  const length = formattedString.length;
  if (length <= 1) {
    return true;
  }
  for (let left = 0; left < length; left++) {
    const right = length - 1 - left;
    if (right < left) {
      return true;
    }
    if (formattedString[left] !== formattedString[right]) {
      return false;
    }
  }
};
