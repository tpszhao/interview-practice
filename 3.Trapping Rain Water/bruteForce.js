const trap = (input) => {
  const length = input.length;
  if (length < 3) {
    return 0;
  }
  let waterTrapped = 0;
  for (let i = 1; i < length - 1; i++) {
    const blockHeight = input[i];
    let startWallHeight = 0;
    let endWallHeight = 0;
    for (let startIndex = 0; startIndex < i; startIndex++) {
      startWallHeight = Math.max(startWallHeight, input[startIndex]);
    }
    for (let endIndex = i + 1; endIndex < length; endIndex++) {
      endWallHeight = Math.max(endWallHeight, input[endIndex]);
    }

    const minWallHeight = Math.min(startWallHeight, endWallHeight);
    if (minWallHeight > blockHeight) {
      const waterOnTopOfBlock = minWallHeight - blockHeight;
      waterTrapped += waterOnTopOfBlock;
    }
  }
  return waterTrapped;
};
