const input = [0, 1, 2, 0, 3, 0, 1, 2, 0, 0, 4, 2, 1, 2, 5, 0, 1, 2, 0, 2];

const trap = (input) => {
  const length = input.length;
  if (length < 3) {
    return 0;
  }
  let waterTrapped = 0;
  let startWallHeight = input[0];
  let endWallHeight = input[length - 1];

  let startIndex = 1;
  let endIndex = length - 2;

  while (endIndex >= startIndex) {
    const minWaterLevel = Math.min(startWallHeight, endWallHeight);
    const sideToTest = endWallHeight >= startWallHeight ? "start" : "end";
    const currentIndex = sideToTest === "start" ? startIndex : endIndex;
    const currentBlockHeight = input[currentIndex];

    const canCurrentBlockHoldWater = currentBlockHeight < minWaterLevel;

    if (canCurrentBlockHoldWater) {
      waterTrapped += minWaterLevel - currentBlockHeight;
    } else {
      if (sideToTest === "start") {
        startWallHeight = Math.max(startWallHeight, currentBlockHeight);
      } else {
        endWallHeight = Math.max(endWallHeight, currentBlockHeight);
      }
    }
    if (sideToTest === "start") {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  return waterTrapped;
};

console.log(trap(input));
