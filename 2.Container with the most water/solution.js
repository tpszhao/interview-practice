const maxArea = (input) => {
  const length = input.length;
  let maxArea = 0;

  const calculateArea = (startIndex, endIndex) => {
    const height = Math.min(input[startIndex], input[endIndex]);
    const width = endIndex - startIndex;
    const area = height * width;
    return area;
  };

  let startIndex = 0;
  let endIndex = length - 1;

  while (startIndex !== endIndex) {
    const currentArea = calculateArea(startIndex, endIndex);
    maxArea = Math.max(currentArea, maxArea);
    if (input[startIndex] <= input[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return maxArea;
};
