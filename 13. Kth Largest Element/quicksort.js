const sortBaseCase = (list) => {
  const length = list.length;
  if (length <= 1) return list;
  const [first, second] = list;
  if (first >= second) return list;
  return [second, first];
};

const quicksort = (list) => {
  const length = list.length;
  if (length <= 2) {
    return sortBaseCase(list);
  }
  const pivotIndex = Math.floor(length / 2) - 1;
  const pivot = list[pivotIndex];
  const unsortedLower = [];
  const listOfPivots = [];
  const unsortedHigher = [];
  for (let index = 0; index < length; index++) {
    const element = list[index];
    if (element < pivot) {
      unsortedLower.push(element);
    } else if (element === pivot) {
      listOfPivots.push(element);
    } else {
      unsortedHigher.push(element);
    }
  }

  const sortedHigher = quicksort(unsortedHigher);
  const sortedLower = quicksort(unsortedLower);
  return [...sortedHigher, ...listOfPivots, ...sortedLower];
};

const quicksortSelect = (num, k) => {
  const list = quicksort(num);
  return list[k - 1];
};

export default quicksortSelect;
