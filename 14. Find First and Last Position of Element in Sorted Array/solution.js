const notFound = [-1, -1];

const specialCase = (list, target, start, end) => {
  const length = end - start + 1;
  if (length <= 0) return notFound;

  const value = list[start];
  if (value === target) return [start, start];

  return notFound;
};

const searchRange = (list, target, start = 0, end = list.length) => {
  const segmentLength = end - start + 1;
  if (segmentLength <= 1) {
    return specialCase(list, target, start, end);
  }

  const middleIndex = Math.ceil((start + end) / 2);
  const middleValue = list[middleIndex];

  const searchFirstHalf = () =>
    searchRange(list, target, start, middleIndex - 1);
  const searchSecondHalf = () =>
    searchRange(list, target, middleIndex + 1, end);

  if (middleValue === target) {
    const [earlierIndex] = searchFirstHalf();
    const [_, laterIndex] = searchSecondHalf();
    const result = [earlierIndex, laterIndex].map((index) => {
      if (index === -1) return middleIndex;
      return index;
    });
    return result;
  }
  if (middleValue < target) {
    return searchSecondHalf();
  }
  return searchFirstHalf();
};

export default searchRange;
