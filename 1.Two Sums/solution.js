const twoSum = (list, target) => {
  const length = list.length;
  const visitedIndices = {};
  for (let currentIndex = 0; currentIndex < length; currentIndex++) {
    const currentValue = list[currentIndex];
    const differenceRequired = target - currentValue;
    const indexOfDifference = visitedIndices[differenceRequired];
    if (indexOfDifference !== undefined) {
      return [indexOfDifference, currentIndex];
    }
    visitedIndices[currentValue] = currentIndex;
  }
  return null;
};
