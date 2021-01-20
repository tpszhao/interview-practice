const isSubstringValidPalindrome = (s, start, end) => {
  // assume 0 <= start,end <= s.length - 1
  let left = start;
  let right = end;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const validPalindrome = (s) => {
  const length = s.length;
  if (length <= 2) {
    return true;
  }

  for (let i = 0; i < length; i++) {
    const j = length - 1 - i;
    if (i >= j) return true;

    if (s[i] !== s[j]) {
      if (isSubstringValidPalindrome(s, i, j - 1)) return true;
      if (isSubstringValidPalindrome(s, i + 1, j)) return true;
      return false;
    }
  }
};
