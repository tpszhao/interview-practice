const generateString = (command) => {
  const list = [];
  const length = command.length;
  for (let i = 0; i < length; i++) {
    const currentCharacter = command[i];
    if (currentCharacter === "#") {
      list.pop();
    } else {
      list.push(currentCharacter);
    }
  }
  return list;
};

const backspaceCompare = (S, T) => {
  const firstString = generateString(S);
  const secondString = generateString(T);
  if (firstString.length !== secondString.length) {
    return false;
  }

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      return false;
    }
  }
  return true;
};
