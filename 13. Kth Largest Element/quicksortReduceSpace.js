// quick sort algorithm, except achieving O(1) space by swapping index instead
// note: the sorted is in descending order

const swap = (list, i, j) => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};

const findPivotIndex = (list, left, right) => {
  const pivotElement = list[right];
  let i = left;
  let j = left;
  while (j <= right) {
    if (list[j] >= pivotElement) {
      swap(list, i, j);
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i - 1;
};

const quickSort = (list, left = 0, right = list.length - 1) => {
  if (left < right) {
    const pivotIndex = findPivotIndex(list, left, right);
    quickSort(list, left, pivotIndex - 1);
    quickSort(list, pivotIndex + 1, right);
  }
};

const quickSortSelect = (list, k) => {
  quickSort(list);
  return list[k - 1];
};

export default quickSortSelect;
