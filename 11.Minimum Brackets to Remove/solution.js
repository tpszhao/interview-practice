const leftBracket = "(";
const rightBracket = ")";

export const minRemoveToMakeValid = (str) => {
  const stack = [];
  let currentString = "";

  const updateString = (char) => {
    currentString = currentString.concat(char);
  };

  for (let i = 0; i < str.length; i++) {
    const currentCharacter = str[i];
    if (currentCharacter === leftBracket) {
      stack.push(currentCharacter);
      updateString(leftBracket);
    } else if (currentCharacter === rightBracket) {
      const latestBracket = stack.pop();
      if (latestBracket === leftBracket) {
        updateString(rightBracket);
      }
    } else {
      updateString(currentCharacter);
    }
  }

  let resultString = "";
  const updateResult = (char) => {
    resultString = char.concat(resultString);
  };
  for (let i = 0; i < currentString.length; i++) {
    const currentIndex = currentString.length - 1 - i;
    const currentCharacter = currentString[currentIndex];
    if (currentCharacter !== leftBracket) {
      updateResult(currentCharacter);
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      updateResult(currentCharacter);
    }
  }
  return resultString;
};
