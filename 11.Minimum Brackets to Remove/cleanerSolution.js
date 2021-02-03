const leftBracket = "(";
const rightBracket = ")";

export const minRemoveToMakeValid = (str) => {
  const bracketStack = [];
  const characterArray = str.split("");
  for (let index = 0; index < str.length; index++) {
    const currentCharacter = str[index];
    switch (currentCharacter) {
      case leftBracket:
        bracketStack.push(index);
        break;
      case rightBracket:
        if (bracketStack.length > 0) {
          bracketStack.pop();
        } else {
          characterArray[index] = "";
        }
        break;
      default:
        break;
    }
  }
  while (bracketStack.length > 0) {
    const indexToRemove = bracketStack.pop();
    characterArray[indexToRemove] = "";
  }
  return characterArray.join("");
};
