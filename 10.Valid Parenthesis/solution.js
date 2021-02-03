const bracketPair = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const isClosingBracket = (bracket) => {
  return bracketPair[bracket] === undefined;
};

export const isValid = (str) => {
  const stack = [];
  const length = str.length;
  for (let i = 0; i < length; i++) {
    const currentBracket = str[i];
    if (isClosingBracket(currentBracket)) {
      const latestBracket = stack.pop();
      if (bracketPair[latestBracket] !== currentBracket) {
        return false;
      }
    } else {
      stack.push(currentBracket);
    }
  }

  return stack.length === 0;
};
