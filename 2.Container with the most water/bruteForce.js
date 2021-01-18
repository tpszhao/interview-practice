const maxArea = (input) => {
  const length = input.length;
  let maxArea = 0;

  const calculateArea = (startIndex, endIndex) => {
    const height = Math.min(input[startIndex], input[endIndex]);
    const width = endIndex - startIndex;
    const area = height * width;
    return area;
  };

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const currentArea = calculateArea(i, j);
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  return maxArea;
};
